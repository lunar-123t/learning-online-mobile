
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, StyleSheet, FlatList, View, Text, StatusBar, TouchableOpacity, Dimensions, AsyncStorage, Alert, } from 'react-native';
import { RootTabScreenProps } from '../types';
import { env } from '../env';
import axios from 'axios';
const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };


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
  useEffect(async () => {
    try {
      const valueStorage = await AsyncStorage.getItem('taikhoandaluu')
      if(valueStorage !== null)
      {
        Alert.alert(
          "Đăng Nhập Thành Công",
          "Nhấn Ok để tiếp tục",
          [
            {
              text: "Đăng Ký Lại Tài Khoản",
              onPress: () => navigation.navigate("SignUp"),
              
            },

            { text: "OK", onPress: () => navigation.navigate("Home") }
          ]
        );
      }
    } catch (e) {
      // error reading value
    }
    axios.get(`${baseUrl}/slider/`).then(async (response) => {
      
      
      
      const data = response.data;
      setSlider(data)
      setLoading(true);

    });
  }, []);


  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
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

function onChangtaikhoanluu(valueStorage: string) {
  throw new Error('Function not implemented.');
}
// export default Slidershow;