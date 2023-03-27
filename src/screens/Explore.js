import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, ActivityIndicator} from 'react-native';
import { useSelector } from 'react-redux';

import Header  from '../components/Header'
import Card  from '../components/Card'



const LittlCard = ({name}) => {
   
    return (
        <View style={{backgroundColor: "red", height:40, width:150, borderRadius:4, marginTop: 10}}>
            <Text  style={{textAlign: "center", color: "white", fontSize: 22, marginTop:5}}>{name}</Text>
        </View>
    )
}



const Explore = () => {
    const CardData = useSelector(state => {
        return state
      })
  return (
    <View style={{flex: 1}}>
        <Header/>


        <View style={{marginTop: -18}}>
        <View style={{flex: 1, flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}}>
        <LittlCard name="Gaming"/>
        <LittlCard name="Trending"/>
        <LittlCard name="Music"/>
        <LittlCard name="News"/>
        <LittlCard name="Movies"/>
        <LittlCard name="Fashion"/>
        </View>

        <Text style={{margin: 8,fontSize:20, borderBottomWidth: 1}}> Trending Video </Text>
        </View>
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
  )
}

  export default Explore    