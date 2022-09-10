import { StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function StartScreen({ navigation }: RootTabScreenProps<'TabStart'>) {

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 40,fontWeight:'bold'}}>Learn Programing easy and simple</Text>
      <TouchableOpacity
      style={{width:'40%',height:'7%',backgroundColor:'orange',borderRadius:10,alignItems: 'center',justifyContent: 'center',top:100}}
      onPress={()=>{
    
                navigation.navigate("SignUp")
             }} 
      >
      <Text style={{fontSize: 20,fontWeight:'bold'}}> explore now </Text>       
      
      </TouchableOpacity>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:50,
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
});
