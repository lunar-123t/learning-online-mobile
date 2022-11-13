import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button, View, StyleSheet, Alert, Text, Image, FlatList, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/Ionicons"
import { env } from "../env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from 'react-redux';
import { setList_video_mon_hoc } from "../store/actions/khoahoc";
const { baseUrl } = env();
type Props = {
  khoa: any,
  monhoc: any,
  videomonhoc: any,
  setKhoahoc: (Value: any) => void,
  setListmonhoc: (Value: any) => void,
  setList_video_mon_hoc: (Value: any) => void,
  navigation: any
}

function VideoScreen(props: Props) {
  const [videoid, setVideoid] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [dsvideo, setDsvideo] = React.useState([]);
  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    try {
      const valueStorage = async () => {
        const value = await AsyncStorage.getItem('taikhoandaluu')
        const config = {
          headers: {
            Authorization: `Bearer ${value}`
          }
        };
        // console.log('haha')
        const valueid = (props.videomonhoc.Videomonhoc)
        // console.log(valueid)
        axios.get(`${baseUrl}/khoahoc/listvideo?idmonhoc=${valueid}`, config).then(async (response) => {
          const data = response.data;
          setDsvideo(data)
          setVideoid(data[0].video_id)
          console.log(data)
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

  const Item = ({ item }) => (
    <View style={{ width: '99.5%', height: 101, backgroundColor: '#f2f2f2', margin: 1 }}>

      <TouchableOpacity style={{ flexDirection: 'row' }}
        onPress={() => {

          setVideoid(item.video_id)
        }}
      >
        <View style={{ width: '50%', height: 50, margin: 1 }}>

          <Image
            style={{ width: '80%', height: 98 }}
            source={{ uri: item.url_anh }}
          />
        </View>
        <View style={{ right: 30 }}>
          <Text>
            {item.ten_bai}
          </Text>
          <Text>
            <Icon name="time-outline" size={14} />
            {item.thoi_luong}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={{ borderWidth: 1, height: 760, backgroundColor: '#ffffff' }}>

      <YoutubePlayer
        height={229}
        play
        videoId={videoid}
        // videoId="O71GdeeND68"
        onChangeState={onStateChange}
      />

      <FlatList
        data={dsvideo}
        renderItem={Item}
      />


    </View>
  );
};
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

  logo: {
    width: '100%',
    height: 300
  }
});
const mapStateToProps = (state: any) => ({
  // usercoin: state.usercoin,
  khoa: state.khoahoc,
  monhoc: state.khoahoc,
  videomonhoc: state.khoahoc,
})



export default connect(mapStateToProps)(VideoScreen);