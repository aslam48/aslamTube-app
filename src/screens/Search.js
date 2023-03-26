import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';
import MiniCart from '../components/MiniCard'



const SearchScreen = () => {
    const [value, setValue] = useState(" ")
    const [miniCarData, setminiCard] = useState([])
    const [loading, setLoading] = useState(false)

const fetchData = () => {
    setLoading(true)
    fetch(`
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzasyahhQMjGR-molv_AcoleMJKZYg8YMoFIVI`)
    .then(res => res.json())
    .then (data=> {
        console.log(data)
        setLoading(false)
        setminiCard(data.items)
    })
}
return  (
   
    <View style={{flex: 1}}>
        <View style={{ padding:5, flexDirection: "row", justifyContent:"space-around",elevation: 4, shadowOffset: {width: 10, height: 10,}, shadowColor: "black", shadowOpacity: 1.0, backgroundColor:  "white"}}>
            <Ionicons name ="md-arrow-back" size={32} /> 
            <TextInput style={{width: "70%", backgroundColor: "#e6e6e6"}} value={value} onChangeText ={(text)=> setValue(text)} 
            />
            <Ionicons onPress={() => fetchData()} name ="md-send" size={32} /> 
        </View>

        { loading ?   <ActivityIndicator style={{marginTop: 10}} size='large' color='red'/> : null }

        <FlatList data={miniCarData} renderItem={({item}) => { 
        return <MiniCart
         videoID={item.id.videoID} 
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
         />
    }} 
    keyExtractor={item => item.id.videoID}
    />

    </View>
)
}

export default SearchScreen