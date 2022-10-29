import React, { useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { env } from '../env';
import axios from 'axios';
const { baseUrl } = env();
// const dsmonhoc = [
  
//         {
//             id: 1,
//             ten_mon_hoc: 'HTML',
//             url_anh: "https://tmarketing.vn/wp-content/uploads/2021/09/html.jpg",
//             level: 1
//         },
//         {
//             id: 2,
//             ten_mon_hoc: 'Python',
//             url_anh: "https://wiki.tino.org/wp-content/uploads/2021/05/python_la_gi_1.jpg",
//             level: 1
//         },
//         {
//             id: 3,
//             ten_mon_hoc: 'Wordpress',
//             url_anh: "https://wiki.matbao.net/wp-content/uploads/2019/12/toi-uu-hinh-anh-wordpress-3.png",
//             level: 1
//         },
//         {
//             id: 4,
//             ten_mon_hoc: 'CSS',
//             url_anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EMBPvyrMEbMPPzHFaMWGxX7pX_hq45VF_aqcXrdZkA&s",
//             level: 1
//         },
//         {
//           id: 5,
//           ten_mon_hoc: 'Javacript',
//           url_anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFMiNZR6D-ojxCTCadZHcjxRe0gRLbl02UYQ&usqp=CAU",
//           level: 1
//         },
//         {
//           // "id": 4,
//           ten_mon_hoc: 'Vuejs',
//           url_anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThq-rUnFQMuY2pOQO4XD4Y_cLtXD0Rh8r3Qw&usqp=CAU",
//           level: 1
//         },
//         {
//           // "id": 4,
//           ten_mon_hoc: 'PHP',
//           url_anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m4mFVr0QXK-bo3-hCShUJjwq5RvirNwyrg&usqp=CAU",
//           level: 1
//         },
//         {
//           // "id": 4,
//           ten_mon_hoc: 'SQL',
//           url_anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAWuA3TdFDiDfej94fWnHdNQJ9H-nb6AcCxA&usqp=CAU",
//           level: 1
//         },
//         {
//           // "id": 4,
//           ten_mon_hoc: 'PHP',
//           url_anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThq-rUnFQMuY2pOQO4XD4Y_cLtXD0Rh8r3Qw&usqp=CAU",
//           level: 1
//         },
//         {
//           // "id": 4,
//           ten_mon_hoc: 'SQL',
//           url_anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThq-rUnFQMuY2pOQO4XD4Y_cLtXD0Rh8r3Qw&usqp=CAU",
//           level: 1
//         },

// ]
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MDQ3NDgyLCJpYXQiOjE2NjY1MTE0ODIsImp0aSI6IjMwY2ZkMGJiZWRhMDQxZjViZjIzYTNhMjU1ZTE1NzVhIiwidXNlcl9pZCI6Mn0.NIaO21d7VvqDD-fGwxDTmhRPKjH1p098QTT_YkTlIKc"
const config = {
  headers: { Authorization: `Bearer ${token}` },
  data: {"idlevel":1}
};

export default function ListLopHocScreen({ navigation }: RootTabScreenProps<'ListLopHocScreen'>) {
  const [dsState, setDsState] = React.useState([])
  // const [loading, setLoading] = React.useState(false);
  const Item = ({ item }) => (
    <View style={styles.container}>
      {/* <Text style={{fontSize:20,fontWeight:"bold",bottom:0,left:30}}>Khóa học Cơ bản: </Text> */}
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <TouchableOpacity
          style={{ width: 150, height: 160, borderWidth: 1,borderColor:"#DDDDDD", borderRadius: 10, bottom: 0, left: 20 }}
          onPress={() => {
            navigation.navigate('VideoScreen')

          }}
        >
          <Image
            source={{ uri: item.url_anh }}
            style={{ height: 110, width: 148, borderTopLeftRadius: 9, borderTopRightRadius: 9 }}
          />
          <View style={{ width: 147.6, height: 48, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, backgroundColor: "#F4F5FA", alignItems: 'center',justifyContent: 'center',}}>
            <Text>
              {item.ten_mon_hoc}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>

  );
  useEffect(() => {
    axios.get(`https://learningapp2.herokuapp.com/khoahoc/listalllevel?idlevel=1`,config).then((response) => {
      const data = response.data;
      setDsState(data)

    }).catch((e)=>{
      console.log(e)
    });
  }, []);
  return (
    <View style={styles.container}>
    <Text style={{ fontSize: 20, fontWeight: "bold", bottom: 0, left: 30 }}>Khóa học Cơ bản: </Text>
       <View style={{ marginBottom: 20 }}>
                <FlatList
                  // data={item.mon_hoc}
                  data={dsState}
                  renderItem={Item}
                  numColumns={2} 
                />
              </View> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
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
