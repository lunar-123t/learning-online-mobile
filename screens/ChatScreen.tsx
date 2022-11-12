import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import Header2 from './Header2';
const Messages=[
    {
        id:'1',
        messageText:'Hi',
        is_my_messages: true
    },
    {
        id:'2',
        messageText:'Hi Thanh! How are you?',
        is_my_messages: false
    },
    {
        id:'3',
        messageText:'I`m good and you? ',
        is_my_messages: true
    },
    {
        id:'4',
        messageText:'I`m doing good.what are you doing?',
        is_my_messages: false
    },
    {
        id:'5',
        messageText:'I`m working on my app design',
        is_my_messages: true
    },
    {
        id:'6',
        messageText:'Let`s get lauch! How about sushi',
        is_my_messages: false
    },
    {
        id:'7',
        messageText:'That sounds great!',
        is_my_messages: true
    },
    {
      id:'8',
      messageText:'That sounds great!',
      is_my_messages: false
  },
]



export default function ChatScreen(this: any) {
    const Item = ({ item }) => (
        <View style={{alignItems: 'baseline'}}>
            <View style={[styles.textviewchung, item.is_my_messages? styles.textview1 : styles.textview2]} >
              {item.is_my_messages 
                ? <Image style={styles.avatar} source={{ uri: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/274482832_677862406675394_8009174730975749305_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W_859P0JpAYAX_5XL5n&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBwXs6JO7SmC3zx4OwitJNlcgrrBpcy9M-3FRd2BUPJQw&oe=6363E19B' }}/>
                : null
              }
              <View style={[styles.textchung, item.is_my_messages? styles.text1 : styles.text2]}>
                <Text style={[styles.textchung, item.is_my_messages? styles.text3 : styles.text4]} > {item.messageText}</Text>
              </View>
            </View>
         
        </View>
        
       
    );
    
   
  return (
    <KeyboardAvoidingView
    
      behavior="padding"
    >
      <View>
        <Header2 />
      </View>
      <View>
        <Text style={{color:'#bababa',alignSelf: 'center'}}>
          15:00,20 THG 8
        </Text>
        
      </View>
      <FlatList
          data = {Messages} 
          keyExtractor = {item=>item.id}
          renderItem={Item}       
      />
      
      
      <View style={{borderRadius:15, backgroundColor:'#ebe9e8'}}>
        <View style={{flexDirection:'row',width:'100%',backgroundColor:'#ebe9e8',padding:10}}>
          <TextInput
            style={{ fontSize:25, marginVertical: 5,width:'90%'}}
            multiline={true}
            placeholder="Aa"
            
          />  
          <View style={{backgroundColor:'#ebe9e8'}}>
           <Icon style={styles.icon} name='send' size={33} color='#1bc4de'/>
          </View>
        </View>
      </View> 
        <View style={{ height: 30 }} />
      
    </KeyboardAvoidingView> 
    
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
    top:10,
    backgroundColor: '#ebe9e8',
    borderRadius:15

  },
  textview1:{
  },
  textview2:{
    alignSelf:'flex-end'
  },
  textviewchung:{
    marginBottom:43,
    marginLeft: 10,
    marginRight: 10,
   flexDirection:'row',
  },
  text1:{
    backgroundColor:'#decdcc',
    borderRadius:15,
  },
  text2:{
    backgroundColor:'#31a2c4',
    borderRadius:15,
  },
  text3:{
  },
  text4:{
    color:'#fafafa',
  },
  textchung:{
    fontSize:15,
    padding:5, 
  },
  
});


