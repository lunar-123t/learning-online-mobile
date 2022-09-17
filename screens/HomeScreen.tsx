import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';
import React from 'react';
import Header from './Header';
import Icon from "react-native-vector-icons/Ionicons"
import { ImageBackground } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View>
      {/* <View>
        <Header />
      </View> */}
      <View style={styles.view2} >
        {/* <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        <View>
          <Text style={styles.text}>Khoa hoc mien phi</Text>
          <TouchableOpacity>
            <Icon style={styles.icon} name="arrow-forward-outline" size={30} color="#000000" />
          </TouchableOpacity>
        </View> */}
        <ImageBackground style={styles.img} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} resizeMode="cover">
          <Text style={styles.text}>khoa hoc mien phi</Text>
          <TouchableOpacity>
            <Icon style={styles.icon} name="arrow-forward-outline" size={30} color="#000000" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.view3} >
        {/* <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        <View>
          <Text style={styles.text}>Khoa hoc mien phi</Text>
          <TouchableOpacity>
            <Icon style={styles.icon} name="arrow-forward-outline" size={30} color="#000000" />
          </TouchableOpacity>
        </View> */}
        <ImageBackground style={styles.img} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} resizeMode="cover">
          <Text style={styles.text}>khoa hoc tra phi</Text>
          <TouchableOpacity>
            <Icon style={styles.icon} name="arrow-forward-outline" size={30} color="#000000" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 400,
    height: 200,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    marginTop: 20,
    marginLeft: 8,
    position: 'absolute',
    bottom: 0
  },
  view2: {
    position: 'absolute',
    top: 0,
    left: 15,
  },
  view3: {
    position: 'absolute',
    top: 290,
    left: 15,
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 25,
    position: 'absolute',
    bottom: 10,
    left: 20,
    backgroundColor: '#31CCCC',
  },
  icon: {
    position: 'absolute',
    top: 150,
    right: 30,
    backgroundColor: 'yellow',
    borderRadius: 30

  },
  img: {
    width: 350,
    height: 200,
    margin: 20,
  }
});
