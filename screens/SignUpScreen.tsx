import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Alert, Button, Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { Image } from 'react-native';
import { RootTabScreenProps } from '../types';
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';
import axios from 'axios';

export default function SignUpScreen(this: any, { navigation }: RootTabScreenProps<'SignUp'>) {
  const { passwordVisibility, rightIcon,handlePasswordVisibility } = useTogglePasswordVisibility();
  const [email, setemail] = React.useState('');
  const [sodt, setsodt] = React.useState('');
  const [matkhau, setmatkhau] = React.useState('');
  const baseUrl = "https://975c-2402-800-6235-87e4-3839-5bb-4aa5-85d3.ap.ngrok.io"

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30,fontWeight:'bold',marginTop:-150,}}>
          Đăng kí
        </Text>

        <Text style={{fontSize: 15}}>
          Vui lòng điền đầy đủ thông tin
        </Text>

        <Image
            style={styles.logo}
            source={require('../assets/images/iconsignup.png')}
                
        />

            <TextInput
              style={{borderWidth:0.2,width:'80%',borderRadius:5,height:55,fontSize: 20,padding:15,backgroundColor:'white',margin:10}}
                onChangeText={setemail}
                placeholder="Email"
          />
         
  
          <TextInput
              style={{borderWidth:0.2,width:'80%',borderRadius:5,height:55,fontSize: 20,padding:15,backgroundColor:'white',margin:10}}
                onChangeText={setsodt}
                placeholder="Số điện thoại"
          />
     
        <View style={{backgroundColor:'#ffd9e8'}}>
        <TextInput
              style={{borderWidth:0.2,width:330,height:50,borderRadius:5,fontSize: 20,padding:15, backgroundColor:'white',margin:10}}
              placeholder="Mật khẩu"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="newPassword"
              secureTextEntry={passwordVisibility}
              value={matkhau}
              enablesReturnKeyAutomatically
              onChangeText={text => setmatkhau(text)}
            />
             <Pressable style={{position: 'absolute',right:25,bottom:25}} onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
            </Pressable>
        </View>
          
        
   
  
       <TouchableOpacity
              style={{width:'80%', borderWidth:1, borderRadius:10, backgroundColor:'#fcc772', padding:5,height:'7%',margin:10}}
              onPress={ async()=>{
                const data_guilen={
                  email : email,
                  phonenumber : sodt,
                  password: matkhau,
                  
                }
                    axios.post(`${baseUrl}/login/register/`,data_guilen).then((response) => {
                      console.log(response.data);
                      const id_taomoi = response.data["id"]
                      if(!id_taomoi)
                      {
                        Alert.alert(
                          "Đăng Ký Thành Công",
                          "Nhấn Ok để tiếp tục",
                          [
                            { text: "OK", onPress: () => navigation.navigate("SignIn") }
                          ]
                        );
                      }
                      else
                          alert("Đăng ký không thành công")
  
                      }).catch((errol)=>{
                          alert("call API that bai")
                      });
  
               }
               }
      
          >
                <Text style={{ textAlign:'center',fontSize: 20,color:'#fffdfa',margin:5}}>Đăng Ký</Text>
             
          </TouchableOpacity>
  
          <View  style={{flexDirection:'row',justifyContent: 'center',top:25,backgroundColor:'#ffd9e8',}}>
            <Text style={{marginLeft:60,backgroundColor:'#ffd9e8'}}>
              Already have an account?
            </Text>
            <TouchableOpacity
            style={{width:'30%',alignItems: 'center',justifyContent: 'center',backgroundColor:'#ffd9e8',}}
            onPress={()=>{
          
                      navigation.navigate("SignIn")
                      
                  }} 
            >
            <Text style={{color:'red',marginRight:60,}}> sign in </Text>       
            
            </TouchableOpacity>
  
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
    textAlign:'center'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  logo:{
    width:'86%',
    height:'30%',
    
  }

});

