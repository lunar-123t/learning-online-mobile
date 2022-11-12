import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button, View,StyleSheet, Alert, Text, Image ,FlatList, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from "react-native-vector-icons/Ionicons"
import { env } from "../env";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDQ3MzkxLCJpYXQiOjE2NjY1MTEzOTEsImp0aSI6IjEwMzNmZmFjZTZhMDRiZGJiMjUyNGFhODAzZmFlYTQzIiwidXNlcl9pZCI6Mn0.wCtQueyw0gdpW_5gFfzMuZimS0lJWnu0wMUlY_f70iI"
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};
const { baseUrl } = env();


export default function VideoScreen() {
  const [videoid, setVideoid] = useState("O71GdeeND68");
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
            Authorization: `Bearer ${token}`
          }
        };
        // console.log("hahaha")
        // console.log(value)
        axios.get(`${baseUrl}/khoahoc/listvideo`, config).then(async (response) => {
          const data = response.data;
          setDsvideo(data)
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

  const Item = ({ item }) => (
    <View style={{ width: '99.5%', height: 101, backgroundColor: '#f2f2f2', margin: 1 }}>

      <TouchableOpacity style={{ flexDirection: 'row' }}
        onPress={() => {
          setVideoid(item.video_id)       
      }} 
        >
          <View style={{width:'50%',height:50,margin:1}}>
            
            <Image
              style={{width:'80%',height:98}}
              source={{uri:item.url_anh}}
            />
          </View>
          <View style={{right:30}}>
            <Text>
               {item.ten_bai}
            </Text>
            <Text>
              <Icon name="time-outline" size={14}/>
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
