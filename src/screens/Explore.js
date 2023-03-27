import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';
import Header  from '../components/Header'





const Explore = () => {
  return (
    <View style={{flex: 1}}>
        <Header/>
        <Text>Explore</Text>
    </View>
  )
}

  export default Explore    