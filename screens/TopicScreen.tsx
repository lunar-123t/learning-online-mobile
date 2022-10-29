import axios from 'axios';
import React, { useEffect } from 'react';
import { StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { env } from '../env';
import { RootTabScreenProps } from '../types';
// import Header from './Header';
const { baseUrl } = env();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDQ3NDgyLCJpYXQiOjE2NjY1MTE0ODIsImp0aSI6IjMwY2ZkMGJiZWRhMDQxZjViZjIzYTNhMjU1ZTE1NzVhIiwidXNlcl9pZCI6Mn0.NIaO21d7VvqDD-fGwxDTmhRPKjH1p098QTT_YkTlIKc"
const config = {
  headers: {
    Authorization: `Bearer ${token}`,

  }
};
export default function TopicScreen(this: any, { navigation }: RootTabScreenProps<'Topic'>) {
  const [dskhoahocstate, setdskhoahoc] = React.useState([])
  const Item = ({ item }) => (
    <TouchableOpacity 
    onPress={
      ()=>{
        navigation.navigate('VideoScreen')
    }}
    >
      <View style={{ margin: 10 }}>
        <Image
          style={{ height: 100, width: 185, borderRadius: 10 }}
          source={
            {
              uri: item.url_anh
            }}
        />
        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          <Text> {item.ten_mon_hoc}</Text>
        </View>

      </View>

    </TouchableOpacity>
  )
  useEffect(() => {
    axios.get(`https://learningapp2.herokuapp.com/khoahoc/listlevel?idkhoahoc=2`, config).then((response) => {
      const data = response.data
      setdskhoahoc(data)
      // console.log(data)

    }).catch((e) => {
      // console.log(e)
    });

  }, []);
  return (
    <View>
      <View style={{ width: '100%',height:'100%' }}>
        {dskhoahocstate.map((item, key) => {
          return (
            <>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {item.ten_level}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ListLopHocScreen')

                  }}
                >
                  <Text style={{ color: "#4640f5", left: 330 }}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>

                <FlatList
                  data={item.mon_hoc}
                  renderItem={Item}
                  numColumns={2}
                />


              </View>

            </>
          );
        })}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}