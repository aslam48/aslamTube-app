import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import {useState} from "react"

import Header  from '../components/Header'
import Card  from '../components/Card'


export default function HomeScreen({navigation}) {
  const CardData = useSelector(state => {
    return state
  })

  const [value, setValue] = useState("react")


  const fetchData = () => {
    setLoading(true)
    fetch
    (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=${N}`)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
                setLoading(false)
                 setLoading(false)
                setValue(data.items)
    })
      .catch((error) => {
                console.error(error);
            });
}

  return (
    <View style= {{flex: 1}}>
    <Header />


 
  
    <FlatList data={CardData} renderItem={({item})=> {
      return <Card 
      videoId={item.id.videoId}
      title={item.snippet.title}
      channel={item.snippet.channelTitle}
      setValue={setValue}
      />
    }}
    keyExtractor={item=>item.id.videoId}
    />
   

    </View>

  );
}
