import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';
import Constant from 'expo-constants'
import Header  from '../components/Header'






const Subscribe = () => {
  return (
    <View style={{
      marginTop:Constant.statusBarHeight ,flex: 1}}>
            <Header/>
        <Text>subscribe</Text>
    </View>
  )
}

  export default Subscribe    