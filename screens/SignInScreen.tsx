import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component, useState } from 'react';
import { Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useForm } from "react-hook-form";

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';

export default function SignInScreen({ navigation }: RootTabScreenProps<'SignIn'>) {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const [tendn, setTendn] = React.useState('')
  // const [matkhau, setmatkhau] = React.useState('')
  const [matkhau, setMatkhau] = useState('');
  return (
    <View style={styles.container}>
      <Text style={{marginTop:-150,fontSize: 30,fontWeight:'bold'}}>
        Đăng nhập
      </Text>
      <View style={{width:'90%',height:500,paddingTop:200,justifyContent: 'center',backgroundColor:'#ffd9e8',}}>
        <TextInput
          accessibilityLabel='Email'
          style={{height:'18%',justifyContent: 'center',borderWidth:1,paddingTop:1,marginVertical:5,margin:12,paddingLeft:25,borderRadius:15,backgroundColor:'white',}}
          onChangeText={setTendn}
          value={tendn}
          placeholder="Email hoặc số điện thoại"
        />
          {/* <View style={{height:'18%',justifyContent: 'center',borderWidth:1,paddingTop:1,marginVertical:5,marginTop:15 ,margin:12,paddingLeft:25,borderRadius:15,backgroundColor:'white'}}>
          <TextInput
            // style={{height:'18%',justifyContent: 'center',borderWidth:1,paddingTop:1,marginVertical:5,marginTop:15 ,margin:12,paddingLeft:25,borderRadius:15,backgroundColor:'white'}}
            autoCapitalize="none"

            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            value={matkhau}
            enablesReturnKeyAutomatically
            onChangeText={text => setmatkhau(text)}
            placeholder="Mật khẩu"
          />
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
          </Pressable>
          </View> */}
          <View style={{ alignItems: 'center',height:'18%',flexDirection:'row',justifyContent: 'center',borderWidth:1,paddingTop:1,marginVertical:5,marginTop:15 ,margin:12,borderRadius:15,backgroundColor:'white'}}>
            <TextInput
              style={{marginRight:220}}
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
            <Pressable onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
          </View>
          
        <TouchableOpacity
        style={{marginLeft:230,top:10}}
        onPress={()=>{
      
                  navigation.navigate("QuenMK")
                  
              }} 
        >
        <Text style={{fontSize: 15,color:'#808080'}}> Quên mật khẩu </Text>       
        
        </TouchableOpacity>
        <TouchableOpacity
        style={{width:'95%',height:'20%',backgroundColor:'#fcc772',borderRadius:15,alignItems: 'center',justifyContent: 'center',top:30,marginLeft:10}}
        onPress={()=>{
      
                  navigation.navigate("Home")
                  
              }} 
        >
        <Text style={{fontSize: 20,fontWeight:'bold',color:'white'}}> Đăng Nhập </Text>       
        
        </TouchableOpacity>
        <View style={{marginTop:50,height:30,alignItems: 'center',justifyContent: 'center',backgroundColor:'#ffd9e8',}}>
        <Text style={{color:'#c2b6bb'}}>------ Or continue with ------</Text>
        </View>
        <View style={{backgroundColor:'#ffd9e8',flexDirection:'row',justifyContent: 'center'}}>
            <TouchableOpacity
            style={{width:'40%',height:60,borderWidth:1,alignItems: 'center',backgroundColor:'white',justifyContent: 'center',margin:15,borderRadius:15}}
            onPress={()=>{
          
                      // navigation.navigate("SignUp")
                      
                  }} 
            >
            <Text style={{color:'black'}}> Goolge </Text>       
            
            </TouchableOpacity>

            <TouchableOpacity
            style={{width:'40%',borderWidth:1,alignItems: 'center',backgroundColor:'blue',justifyContent: 'center',margin:15,borderRadius:15}}
            onPress={()=>{
          
                      // navigation.navigate("SignUp")
                      
                  }} 
            >
            <Text style={{color:'white'}}> Facebook </Text>       
          
          </TouchableOpacity>


        </View>
        <View  style={{backgroundColor:'#ffd9e8',flexDirection:'row',justifyContent: 'center'}}>
          <Text style={{backgroundColor:'#ffd9e8',}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
          style={{width:'30%',alignItems: 'center',backgroundColor:'#ffd9e8',justifyContent: 'center'}}
          onPress={()=>{
        
                    navigation.navigate("SignUp")
                    
                }} 
          >
          <Text style={{color:'red'}}> sign up </Text>       
          
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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



