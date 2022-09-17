import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component, useState } from 'react';
import { Alert, Pressable, StyleSheet, TextInput, TouchableHighlightBase, TouchableOpacity } from 'react-native';
import { useForm } from "react-hook-form";
import { Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';
import axios from 'axios';


export default function SignInScreen(this: any, { navigation }: RootTabScreenProps<'SignIn'>) {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const [email, setemail] = React.useState('');
  // const [matkhau, setmatkhau] = React.useState('')
  const [matkhau, setMatkhau] = React.useState('');

  const baseUrl = "https://975c-2402-800-6235-87e4-3839-5bb-4aa5-85d3.ap.ngrok.io"

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30,fontWeight:'bold',margin:10}}>
        Đăng nhập
      </Text>
      <View style={{width:'70%',height:300,backgroundColor:'#ffd9e8'}}>
        <Image
          style={styles.logo}
          source={require('../assets/images/iconsignin.png')}
        />
      </View>
      <TextInput
          accessibilityLabel='Email'
          style={{padding:15,width:'80%',height:'7%',justifyContent: 'center',marginVertical:5,borderRadius:8,backgroundColor:'white'}}
          onChangeText={setemail}
          value={email}
          placeholder="Email hoặc số điện thoại"
        />

        <TextInput
              style={{padding:15,width:'80%',height:'7%',justifyContent: 'center',marginVertical:5,borderRadius:8,backgroundColor:'white',}}
              // name="password"
              placeholder="Mật khẩu"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility}
              value={matkhau}
              enablesReturnKeyAutomatically
              onChangeText={text => setMatkhau(text)}
            />
            <Pressable style={{position: 'absolute',right:45,bottom:270}} onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>

        <TouchableOpacity
              style={{marginLeft:230,top:10}}
              onPress={()=>{
            
                        navigation.navigate("QuenMK")
                        
                    }} 
              >
        <Text style={{fontSize: 15,color:'#808080'}}> Quên mật khẩu </Text>       
        
        </TouchableOpacity>

        <TouchableOpacity
        style={{width:'80%',height:'7%',backgroundColor:'#fcc772',borderRadius:15,alignItems: 'center',justifyContent: 'center',top:30,marginLeft:10}}
        onPress={async()=>{
          const data_guilen={
            username :email,
            password: matkhau,
            
          }
              axios.post(`${baseUrl}/login/api/token/`,data_guilen).then((response) => {
                console.log(response.data);
                const id_taomoi = response.data["id"]
                console.log('data["email"]')
                if(!id_taomoi)
                {
                  Alert.alert(
                    "Đăng Nhập Thành Công",
                    "Nhấn Ok để tiếp tục",
                    [
                      { text: "OK", onPress: () => navigation.navigate("Home") }
                    ]
                  );
                }
                else
                    alert("Đăng Nhập không thành công")

                }).catch((errol)=>{
                    alert("call API that bai")
                });

         
          
        }}
        >
        <Text style={{fontSize: 20,fontWeight:'bold',color:'white'}}> Đăng Nhập </Text>       
        
        </TouchableOpacity>

        <Text style={{color:'#c2b6bb',margin:40}}>------ Or continue with ------</Text>

        <View style={{backgroundColor:'#ffd9e8',flexDirection:'row',justifyContent: 'center',paddingBottom:20}}>
            <TouchableOpacity
            style={{width:'40%',height:60,alignItems: 'center',backgroundColor:'white',justifyContent: 'center',borderRadius:10,right:10}}
            onPress={()=>{
          
                      // navigation.navigate("SignUp")
                      
                  }} 
            >
            <Text style={{color:'black'}}> Goolge </Text>       
            
            </TouchableOpacity>

            <TouchableOpacity
            style={{width:'40%',alignItems: 'center',backgroundColor:'blue',justifyContent: 'center',borderRadius:10,left:10}}
            onPress={()=>{
          
                      // navigation.navigate("SignUp")
                      
                  }} 
            >
            <Text style={{color:'white'}}> Facebook </Text>       
          
          </TouchableOpacity>
         

        </View>
        <View  style={{backgroundColor:'#ffd9e8',flexDirection:'row',justifyContent: 'center',bottom:20}}>
          <Text style={{backgroundColor:'#ffd9e8',left:35}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
          style={{width:'30%',backgroundColor:'#ffd9e8',left:35}}
          onPress={()=>{
        
                    navigation.navigate("SignUp")
                    
                }} 
          >
          <Text style={{color:'red'}}> sign up </Text>       
          
          </TouchableOpacity>

        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'#ffd9e8',
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
  // inputContainer: {
  //   backgroundColor: 'white',
  //   width: '100%',
  //   borderRadius: 8,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderWidth: 4,
  //   borderColor: '#d7d7d7'
  // },
  // inputField: {
  //   padding: 14,
  //   fontSize: 22,
  //   width: '90%'
  // }

});



function _userLogin() {
  throw new Error('Function not implemented.');
}

function STORAGE_KEY(STORAGE_KEY: any, id_taomoi: any) {
  throw new Error('Function not implemented.');
}

function renderResults() {
  throw new Error('Function not implemented.');
}

