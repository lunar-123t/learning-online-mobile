import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect } from 'react';
import { StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { env } from '../env';
import { connect } from 'react-redux';
import { setKhoahoc } from '../store/actions/khoahoc'
import { RootTabScreenProps } from '../types';
// import Header from './Header';
const { baseUrl } = env();
type Props = {
  khoa: any,
  setKhoahoc: (Value: any) => void,
  navigation: any
}

function TopicScreen(props: Props) {
  const [dskhoahocstate, setdskhoahoc] = React.useState([])
  const Item = ({ item }) => (
    <TouchableOpacity
      onPress={
        () => {
          props.navigation.navigate('VideoScreen')
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
    try {
      const valueStorage = async () => {
        const value = await AsyncStorage.getItem('taikhoandaluu')
        const config = {
          headers: {
            Authorization: `Bearer ${value}`,
          }
        };
        const valueid = (props.khoa.Khoa)
        axios.get(`${baseUrl}/khoahoc/listlevel?idkhoahoc=${valueid}`, config).then(async (response) => {
          const data = response.data;
          setdskhoahoc(data)
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
    <View>
      <View style={{ width: '100%', height: '100%' }}>
        {dskhoahocstate.map((item, key) => {
          return (
            <>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {item.ten_level}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    
                    props.navigation.navigate('ListLopHocScreen')

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
const mapStateToProps = (state: any) => ({
  // usercoin: state.usercoin,
  khoa: state.khoahoc,
})
const mapDispatchToProps = {
  setKhoahoc
}

export default connect(mapStateToProps,mapDispatchToProps)(TopicScreen);