import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import Header2 from './Header2';
import { env } from '../env';
import axios from 'axios';

const { baseUrl } = env();
// const Messages=[
//     {
//         id:'1',
//         messageText:'Hi',
//         is_my_messages: true
//     },
//     {
//         id:'2',
//         messageText:'Hi Thanh! How are you?',
//         is_my_messages: false
//     },
//     {
//         id:'3',
//         messageText:'I`m good and you? ',
//         is_my_messages: true
//     },
//     {
//         id:'4',
//         messageText:'I`m doing good.what are you doing?',
//         is_my_messages: false
//     },
//     {
//         id:'5',
//         messageText:'I`m working on my app design',
//         is_my_messages: true
//     },
//     {
//         id:'6',
//         messageText:'Let`s get lauch! How about sushi',
//         is_my_messages: false
//     },
//     {
//         id:'7',
//         messageText:'That sounds great!',
//         is_my_messages: true
//     },
    
// ]



export default function ChatScreen(this: any) {
  const [listmessagestate, setListmessage] = React.useState([{
    id:8,
    messageText:'That sounds great!',
    is_my_messages: false
},]);
  const [message, setMessage] = React.useState('');
  const Item = ({ item }) => (
    <View style={{ alignItems: 'baseline' }}>
      <View style={[styles.textviewchung, item.is_my_messages ? styles.textview2 : styles.textview1]} >
        {item.is_my_messages

          ? null
          : <Image style={styles.avatar} source={{ uri: 'https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=0&h=0&q=100&dpr=2&fit=crop&s=KWo2kCkyQr5Xxia52ObvvA' }} />
        }
        <View style={[styles.textchung, item.is_my_messages ? styles.text2 : styles.text1]}>
          <Text style={[styles.textchung, item.is_my_messages ? styles.text4 : styles.text3]} > {item.message_text}</Text>
        </View>
      </View>

    </View>


  );
  useEffect(() => {
    try {
      const valueStorage = async () => {
        const value = await AsyncStorage.getItem('taikhoandaluu')
        const config = {
          headers: {
            Authorization: `Bearer ${value}`,
          }
        };
        axios.get(`${baseUrl}/chat/listmess`, config).then(async (response) => {
          const data = response.data;
          console.log(data)
          setListmessage(data)
        }).catch((e) => {
          // console.log("ERRROR")
          console.log(e)
        });
      }
      valueStorage()
    } catch (e) {
      console.log("ERRROR")
    }
  }, []);
  return (
    <KeyboardAvoidingView

      behavior="position"

    >
      <View >
        <View>
          <Header2 />
        </View>
        <View>
          <Text style={{ color: '#bababa', alignSelf: 'center' }}>
            15:00,20 THG 8
          </Text>

        </View>

        <View style={{ height: '85%' }}>
          <FlatList
            data={listmessagestate}
            // keyExtractor={item => item.id}
            renderItem={Item}
          />
          <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#ebe9e8', padding: 10 }}>
            <TextInput
              style={{ fontSize: 25, marginVertical: 5, width: '90%' }}
              multiline={true}
              value={message}
              placeholder="Aa"
              onChangeText={Text => setMessage(Text)}

            />
            <TouchableOpacity style={{ backgroundColor: '#ebe9e8' }}
              onPress={async () => {

                const value = await AsyncStorage.getItem('taikhoandaluu')
                const config = {
                  headers: {
                    Authorization: `Bearer ${value}`,
                  }
                };
                const data_guilen = {
                  message_text: message
                }
                const listmessage22 = listmessagestate;
                listmessage22.push({id:39,
                is_my_messages: true,
                message_text: message})
                 
                    
                   
                  
              
            axios.post(`${baseUrl}/chat/submit`, data_guilen, config).then((response) => {
              console.log(response.data)
                  setMessage("")
            setListmessage(listmessage22)
                }).catch((errol) => {
              // console.error();
              alert("call API that bai")
            });
              }}
            >
            <Icon style={styles.icon} name='send' size={33} color='#1bc4de' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 10 }} />
    </View>
    </KeyboardAvoidingView >

  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#decdcc",
  },
  icon: {
    top: 10,
    backgroundColor: '#ebe9e8',
    borderRadius: 15

  },
  textview1: {
  },
  textview2: {
    alignSelf: 'flex-end'
  },
  textviewchung: {
    marginBottom: 43,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  text1: {
    backgroundColor: '#decdcc',
    borderRadius: 15,
  },
  text2: {
    backgroundColor: '#31a2c4',
    borderRadius: 15,
  },
  text3: {
  },
  text4: {
    color: '#fafafa',
  },
  textchung: {
    fontSize: 15,
    padding: 5,
  },

});


function config(arg0: string, config: any) {
  throw new Error('Function not implemented.');
}

