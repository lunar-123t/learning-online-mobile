<<<<<<< HEAD
import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button, View, StyleSheet, Alert, Text, Image, FlatList, TouchableOpacity, AsyncStorage } from "react-native";
=======

import React, { useState, useCallback, useRef, useEffect } from "react";
import { Button, View,StyleSheet, Alert, Text, Image ,FlatList, TouchableOpacity, AsyncStorage } from "react-native";
>>>>>>> 857dd7007462f483731d8d95f40f47c08051f9f9
import YoutubePlayer from "react-native-youtube-iframe";

import Icon from "react-native-vector-icons/Ionicons"
import { env } from "../env";
import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDQ3MzkxLCJpYXQiOjE2NjY1MTEzOTEsImp0aSI6IjEwMzNmZmFjZTZhMDRiZGJiMjUyNGFhODAzZmFlYTQzIiwidXNlcl9pZCI6Mn0.wCtQueyw0gdpW_5gFfzMuZimS0lJWnu0wMUlY_f70iI"
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};
const { baseUrl } = env();
<<<<<<< HEAD
=======
const Danhsach=[
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 1',
        thoiluong: '3:00',
        video_id: "O71GdeeND68"
      },
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 2',
        thoiluong: '3:00',
        video_id: "dXBZEr9nh9w"
      },
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 3',
        thoiluong: '3:00',
        video_id: "dV-znS6RPbQ"
      },
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 4',
        thoiluong: '3:00',
        video_id: "dV-znS6RPbQ"
      },
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 5',
        thoiluong: '3:00',
        video_id: "n6Pnzi6r9NU"
      },
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 6',
        thoiluong: '3:00',
        video_id: "n6Pnzi6r9NU"
      },
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 7',
        thoiluong: '3:00'
      },
      {
        anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVIdoPWcjlGpJKQFOv9qOuC5eHKneQLn1Sg&usqp=CAU",
        tenbai: 'Laravel-bai 8',
        thoiluong: '3:00'
      }


]
>>>>>>> 857dd7007462f483731d8d95f40f47c08051f9f9

export default function VideoScreen() {
  const [videoid, setVideoid] = useState("O71GdeeND68");
  const [playing, setPlaying] = useState(false);
  const [dsvideo, setDsvideo] = React.useState([]);
<<<<<<< HEAD

=======
  
>>>>>>> 857dd7007462f483731d8d95f40f47c08051f9f9
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
    console.log(`${baseUrl}khoahoc/listvideo`);
    axios.get(`${baseUrl}khoahoc/listvideo`, config).then((response) => {
      const data = response.data;
      setDsvideo(data);
<<<<<<< HEAD
    }).catch((e) => {

=======
    }).catch((e)=>{
      
>>>>>>> 857dd7007462f483731d8d95f40f47c08051f9f9
      console.log(e)
    });
  }, []);


  const Item = ({ item }) => (
    <View style={{ width: '99.5%', height: 101, backgroundColor: '#f2f2f2', margin: 1 }}>

      <TouchableOpacity style={{ flexDirection: 'row' }}
        onPress={() => {

          setVideoid(item.video_id)
<<<<<<< HEAD

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
=======
          
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
>>>>>>> 857dd7007462f483731d8d95f40f47c08051f9f9
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
