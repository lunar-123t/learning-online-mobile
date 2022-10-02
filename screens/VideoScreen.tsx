
import React, { useState, useCallback, useRef } from "react";
import { Button, View,StyleSheet, Alert, Text, Image ,FlatList, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

import Icon from "react-native-vector-icons/Ionicons"


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
        thoiluong: '3:00'
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

export default function VideoScreen() {
  const [videoid, setVideoid] = useState("O71GdeeND68");
  const [playing, setPlaying] = useState(false);


  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  


  const Item = ({item}) => (
    <View style={{width:'99.5%',height:101,backgroundColor:'#f2f2f2',margin:1}}>
      
        <TouchableOpacity style={{flexDirection:'row'}}
        onPress={()=>{
          
          setVideoid(item.video_id)
          
      }} 
        >
          <View style={{width:'50%',height:50,margin:1}}>
            
            <Image
              style={{width:'80%',height:98}}
              source={{uri:item.anh}}
            />
          </View>
          <View style={{right:30}}>
            <Text>
               {item.tenbai}
            </Text>
            <Text>
              <Icon name="time-outline" size={14}/>
              {item.thoiluong}
            </Text>
          </View>
        </TouchableOpacity>    
    </View>       
  );

  return (
    <View style={{borderWidth:1,height:760,backgroundColor:'#ffffff'}}>
      
      <YoutubePlayer
        
        height={229}
        play
        videoId={videoid}
        // videoId="O71GdeeND68"
        onChangeState={onStateChange}
      />
      <FlatList
        data={Danhsach}
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

  logo:{
    width:'100%',
    height:300
  }
});