import React, { useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { env } from '../env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { baseUrl } = env();

export default function ListLopHocScreen({ navigation }: RootTabScreenProps<'ListLopHocScreen'>) {
  const [dsState, setDsState] = React.useState([])
  const Item = ({ item }) => (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity
          style={{ width: 150, height: 160, borderWidth: 1, borderColor: "#DDDDDD", borderRadius: 10, bottom: 0, left: 20 }}
          onPress={() => {
            navigation.navigate('VideoScreen')

          }}
        >
          <Image
            source={{ uri: item.url_anh }}
            style={{ height: 110, width: 148, borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
          />
          <View style={{ width: 147.6, height: 48, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: "#F4F5FA", alignItems: 'center', justifyContent: 'center', }}>
            <Text>
              {item.ten_mon_hoc}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>

  );
  // useEffect(() => {
  //   axios.get(`${baseUrl}/khoahoc/listalllevel?idlevel=1`, config).then((response) => {
  //     const data = response.data;
  //     setDsState(data)

  //   }).catch((e) => {
  //     console.log(e)
  //   });
  // }, []);

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
        axios.get(`${baseUrl}/khoahoc/listalllevel?idlevel=1`, config).then(async (response) => {
          const data = response.data;
          setDsState(data)
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
      <Text style={{ fontSize: 20, fontWeight: "bold", bottom: 0, left: 30 }}>Khóa học Cơ bản: </Text>
      <View style={{ marginBottom: 20 }}>
        <FlatList
          data={dsState}
          renderItem={Item}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
