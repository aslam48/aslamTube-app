import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';

import Header  from '../components/Header'






const VideoPlayer = () => {
  return (
    <View style={{flex: 1}}>
            <Header/>
        <Text>video player</Text>
    </View>
  )
}

  export default VideoPlayer    