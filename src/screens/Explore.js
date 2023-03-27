import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';
import Header  from '../components/Header'



const LittlCard = () => {
    return (
        <View style={{backgroundColor: "red", width:120, borderRadius:4}}>
            <Text  style={{textAlign: "center", color: "white", fontSize: 22}}>Explore Screen</Text>
        </View>
    )
}



const Explore = () => {
  return (
    <View style={{flex: 1}}>
        <Header/>
        <Text>Explore</Text>
        <LittlCard />
    </View>
  )
}

  export default Explore    