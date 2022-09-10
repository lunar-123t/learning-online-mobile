import React from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SignUpScreen({ navigation }: RootTabScreenProps<'SignUp'>) {
  const [email, setemail] = React.useState('');
  const [sodt, setsodt] = React.useState('');
  const [matkhau, setmatkhau] = React.useState('');
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30,fontWeight:'bold',marginTop:-150}}>
        Đăng kí
      </Text>

          <TextInput
            style={{borderWidth:0.2,width:'80%',borderRadius:5,height:55,fontSize: 20,padding:15,top:60}}
              onChangeText={setemail}
              placeholder="Email"
        />
        {/* </View> */}

        <TextInput
            style={{borderWidth:0.2,width:'80%',borderRadius:5,height:55,fontSize: 20,padding:15,top:95}}
              onChangeText={setsodt}
              placeholder="Số điện thoại"
        />
     {/* </View> */}

        <TextInput
            style={{borderWidth:0.2,width:'80%',borderRadius:5,height:55,fontSize: 20,padding:15, top:125}}
              onChangeText={setmatkhau}
              placeholder="Mật khẩu"
        />
     {/* </View> */}

     <TouchableOpacity
            style={{width:'80%', borderWidth:1, borderRadius:10, backgroundColor:'#fcc772', padding:5,height:'7%',top:160}}
            onPress={
                ()=>{
                 navigation.navigate('SignUp')
             }
             }
    
        >
              <Text style={{ textAlign:'center',fontSize: 20,color:'#fffdfa'}}>Đăng Ký</Text>
           
        </TouchableOpacity>

        <View  style={{flexDirection:'row',justifyContent: 'center',top:170}}>
          <Text style={{marginLeft:40}}>
            Already have an account?
          </Text>
          <TouchableOpacity
          style={{width:'30%',alignItems: 'center',justifyContent: 'center'}}
          onPress={()=>{
        
                    navigation.navigate("SignIn")
                    
                }} 
          >
          <Text style={{color:'#E3B339',marginRight:60}}> sign in </Text>       
          
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

});