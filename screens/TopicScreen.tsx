import React from 'react';
import { StyleSheet, TextInput ,Image, FlatList} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Header from './Header';

const dsKhoahoc = [
  {
    "ten_level": "Khóa học cơ bản",
    "mon_hoc": [
        {
            "id": 1,
            "ten_mon_hoc": "HTML",
            "url_anh": "https://tmarketing.vn/wp-content/uploads/2021/09/html.jpg",
            "level": 1
        },
        {
            "id": 2,
            "ten_mon_hoc": "Python",
            "url_anh": "https://wiki.tino.org/wp-content/uploads/2021/05/python_la_gi_1.jpg",
            "level": 1
        },
        {
            "id": 3,
            "ten_mon_hoc": "Wordpress",
            "url_anh": "https://play-lh.googleusercontent.com/a2NazRVOHSG7ujMkO1YENlUARt0rZul9ow20sAtqoc1oBEGZxk3YjlXb43lhCwxhmUY",
            "level": 1
        },
        {
            "id": 4,
            "ten_mon_hoc": "CSS",
            "url_anh": "https://blog.haposoft.com/content/images/2021/10/6d07a36ebe6d55273b39440f2391f1d7e6d4092a.png",
            "level": 1
        }
    ],
    "id": 1
},
{
    "ten_level": "Khóa học nâng cao",
    "mon_hoc": [
        {
            "id": 5,
            "ten_mon_hoc": "Javacript",
            "url_anh": "https://cdn.tgdd.vn/hoi-dap/1321801/javascript-la-gi-co-vai-tro-gi-cach-bat-javascript-tren.001.jpg",
            "level": 2
        },
        {
            "id": 6,
            "ten_mon_hoc": "Vuejs",
            "url_anh": "https://blog.haposoft.com/content/images/2021/12/Logo-Vuejs.png",
            "level": 2
        },
        {
            "id": 7,
            "ten_mon_hoc": "Django",
            "url_anh": "https://vtiacademy.edu.vn/upload/images/django-trong-python-2.jpg",
            "level": 2
        },
        {
            "id": 8,
            "ten_mon_hoc": "Laravel",
            "url_anh": "https://muakey.vn/wp-content/uploads/2021/12/laravel-featured.png",
            "level": 2
        }
    ],
    "id": 2
}
]


export default function TopicScreen(this: any, { navigation }: RootTabScreenProps<'Topic'>) {
  const Item = ({item}) => (
    <View style={{margin:10}}>
      <Image
            style={{height: 100, width:185,borderRadius:10}}
              source={
                {
                  uri: item.url_anh
            }}
      />
      <Text style={{}}> {item.ten_mon_hoc}</Text>
      
    </View>
  )
  return (
    <View>
       <View>
        <Header/>
      </View>
    <View style ={{width:'100%'}}>
       {dsKhoahoc.map((item, key) => {
         return (
          <>
          <View style={{marginBottom:20}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>
             {item.ten_level}
           </Text>
           <Text style={{color:'#4640f5',left:330}}>
              Xem tất cả
          </Text>
           <FlatList
               data={item.mon_hoc}
               renderItem={Item}
               numColumns={2} />
          </View>
         
               </>
         );
      })} 
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
