import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <View style={{borderWidth:1,flexDirection:'row'}}>
      
        <Text>
          xin chào bạn
        <TouchableOpacity
        style={{backgroundColor:'orange',borderRadius:15,alignItems: 'center',justifyContent: 'center',top:70,marginLeft:10}}
        onPress={()=>{
      
                  navigation.navigate("Nut")
                  
              }} 
        >
        <Text> - </Text>       
        
        </TouchableOpacity>
        </Text>
        {/* <TouchableOpacity
        style={{backgroundColor:'orange',borderRadius:15,alignItems: 'center',justifyContent: 'center',top:70,marginLeft:10}}
        onPress={()=>{
      
                  navigation.navigate("Nut")
                  
              }} 
        >
        <Text> - </Text>       
        
        </TouchableOpacity> */}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth:1
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
