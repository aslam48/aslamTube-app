import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import Header  from '../components/Header'
import Card  from '../components/Card'


export default function HomeScreen({navigation}) {
  const CardData = useSelector(state => {
    return state
  })
  return (
    <View style= {{flex: 1}}>
    <Header />

    <FlatList data={CardData} renderItem={({item})=> {
      return <Card 
      videoId={item.id.videoId}
      title={item.snippet.title}
      channel={item.snippet.channelTitle}
      />
    }}
    keyExtractor={item=>item.id.videoId}
    />
   

    </View>

  );
}
