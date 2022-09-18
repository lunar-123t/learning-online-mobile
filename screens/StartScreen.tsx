
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, StyleSheet, FlatList, View, Text, StatusBar, TouchableOpacity, Dimensions, } from 'react-native';
// import { IMAGE_1, IMAGE_2, IMAGE_3 } from '../assets';
import { RootTabScreenProps } from '../types';
import { env } from '../env';
import axios from 'axios';
const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };

// const slides = [
//   {
//     image: "http://genk.mediacdn.vn/2017/15-ruff-etienne-1513221642291.jpg",
//     title: 'Best Digital Solution',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     image: "https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=0nww5sftrDimoUxyn9lM5g",
//     title: 'Achieve Your Goals',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     image: "https://vcdn1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA",
//     title: 'Increase Your Value',
//     subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
// ];

const { baseUrl } = env();
export default function StartScreen({ navigation }: RootTabScreenProps<'TabStart'>) {
  const [slider, setSlider] = React.useState([])
  const [loading, setLoading] = React.useState(false);


  const Slide = ({ item }) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: item?.image }}
          style={{ height: '75%', width, resizeMode: 'contain' }}
        />
        <View>
          <Text style={styles.title}>{item?.text}</Text>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    );
  };


  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slider.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slider.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  useEffect(() => {
    // Update the document title using the browser API
    // setLoading(true);
    axios.get(`${baseUrl}/slider/`).then((response) => {
      const data = response.data;
      // console.log(data)
      setSlider(data)
      setLoading(true);
      // fetchData();
    });
  },[]);
 

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slider.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#EFBE58',
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slider.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  navigation.navigate("SignUp")
                }}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                  EXPLORE NOW
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: 'black',
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'black',
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <>
        {loading ? (
          <View>
            <StatusBar backgroundColor={COLORS.primary} />
            <FlatList
              sliders={slider}
              ref={ref}
              onMomentumScrollEnd={updateCurrentSlideIndex}
              contentContainerStyle={{ height: height * 0.65 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={slider}
              // pagingEnabled
              renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
          </View>
        ) : (
          <View>
            <Text> </Text>
          </View>
        )}
      </>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: '#000000',
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFBE58',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// export default Slidershow;