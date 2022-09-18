import { StyleSheet, View, Text } from "react-native";
import React from "react";
import {
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

const Header = () => {
    return (
        <View style={styles.row}>
            <View style={styles.row}>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <Text style={styles.text}>Xin chao ban !</Text>
            </View>
            <View style={styles.test} >
                <TouchableOpacity>
                    <Icon style={styles.icon} name="menu-outline" size={30} color="#000000" />
                </TouchableOpacity>   
            </View>
        </View>
    )
}
export default Header
const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "white",
    },
    row: {
        flexDirection: "row",
        marginTop:20
    },
    text:{
        marginTop:20,
        marginLeft:20
    },
    icon:{
        backgroundColor : "#fff",
        elevation:8,
        paddingVertical: 12,

    },
    test:{
        position:'absolute',
        right:10
        
    }
})