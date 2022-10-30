import { Text, View } from '../components/Themed';
import {StyleSheet,TouchableOpacity,Alert,FlatList} from 'react-native';
import React, { useEffect } from 'react';
import Header from './Header';
import Icon from "react-native-vector-icons/Ionicons"
import { ImageBackground } from 'react-native';
import { RootTabScreenProps } from '../types';
import axios from 'axios';
import { env } from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { baseUrl } = env();
export default function HomeScreen({ navigation, route }: RootTabScreenProps<'Home'>) {
  const [dskhoahocState, setDskhoahocState] = React.useState([])
  const Logout = async () => {
    const valueStorage = await AsyncStorage.getItem('taikhoandaluu')
    console.log(valueStorage)
    Alert.alert(
      "Do you want to sign out?",
      "Pess OK to continue ",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK", onPress: async () => {
            try {
              if (valueStorage !== null) {
                await AsyncStorage.removeItem('taikhoandaluu')
                navigation.navigate('SignIn')
              } else {
              }
            } catch (e) {
              console.log('2.')
            }
          }
        }
      ]
    );
  }

  const Item = ({ item }) => (
    <View>

      <TouchableOpacity style={{}}
        onPress={() => {
          navigation.navigate('Topic')
        }}
      >
        <ImageBackground style={styles.img} source={{ uri: item.url_anh }} resizeMode="cover">
          <Text style={styles.text}>{item.ten_khoa_hoc}</Text>
          <View>
            <Icon style={styles.icon} name="arrow-forward-outline" size={30} color="#000000" />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Logout()}>
        <Icon style={styles.icon} name="arrow-forward-outline" size={30} color="#000000" />
      </TouchableOpacity>

    </View>

  );

  useEffect(() => {
    try {
      const valueStorage = async () => {
        const value = await AsyncStorage.getItem('taikhoandaluu')
        const config = {
          headers: { Authorization: `Bearer ${value}` },
          data: { "idlevel": 1 }
        };
        // console.log("hahaha")
        // console.log(value)
        axios.get(`${baseUrl}/khoahoc/listkhoahoc`, config).then(async (response) => {
          const data = response.data;
          setDskhoahocState(data)
          // console.log(data)
        }).catch((e) => {
          console.log("ERRROR")
          console.log(e)
        });
      }
      valueStorage()
    } catch (e) {
      console.log("ERRROR")
    }
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Header navigation={navigation} route={route} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <FlatList
          data={dskhoahocState}
          renderItem={Item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 400,
    height: 200,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    marginTop: 20,
    marginLeft: 8,
    position: 'absolute',
    bottom: 0
  },
  container: {
    height: '100%',
    width: '100%',
  },
  view2: {
    position: 'absolute',
    top: 150,
    left: 15,
    
  },
  view3: {
    position: 'absolute',
    top: 430,
    left: 15,
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 25,
    position: 'absolute',
    bottom: 10,
    left: 20,
    backgroundColor: '#31CCCC',
  },
  icon: {
    position: 'absolute',
    top: 150,
    right: 30,
    backgroundColor: 'yellow',
    borderRadius: 30

  },
  img: {
    width: 350,
    height: 200,
    margin: 20,
  }
});
