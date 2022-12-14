import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { Text, View, } from '../components/Themed';
import { env } from '../env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { setList_video_mon_hoc } from '../store/actions/khoahoc';
const { baseUrl } = env();
type Props = {
  khoa: any,
  monhoc: any,
  videomonhoc:any,
  setKhoahoc: (Value: any) => void,
  setListmonhoc: (Value: any) => void,
  setList_video_mon_hoc: (Value: any) => void,
  navigation: any
}
function ListLopHocScreen(props: Props) {
  const [dsState, setDsState] = React.useState([])
  const Item = ({ item }) => (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity
          style={{ width: 150, height: 160, borderWidth: 1, borderColor: "#DDDDDD", borderRadius: 10, bottom: 0, left: 20 }}
          onPress={() => {
            props.setList_video_mon_hoc(item.id)
            props.navigation.navigate('VideoScreen')

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
  useEffect(() => {
    try {
      const valueStorage = async () => {
        const value = await AsyncStorage.getItem('taikhoandaluu')
        const config = {
          headers: { Authorization: `Bearer ${value}` },
        };
        const valueid = (props.monhoc.Monhoc)
        axios.get(`${baseUrl}/khoahoc/listalllevel?idlevel=${valueid}`, config).then(async (response) => {
          const data = response.data;
          setDsState(data)
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
const mapStateToProps = (state: any) => ({
  // usercoin: state.usercoin,
  khoa: state.khoahoc,
  monhoc: state.khoahoc,
  videomonhoc: state.khoahoc,
})
const mapDispatchToProps = {
  setList_video_mon_hoc
}


export default connect(mapStateToProps,mapDispatchToProps)(ListLopHocScreen);