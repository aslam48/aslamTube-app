import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState } from 'react';

const SearchScreen = () => {
    const [value, setValue] = useState(" ")
return  (
    <View style={{flex: 1}}>
        <View style={{ padding:5, flexDirection: "row", justifyContent:"space-aroun",elevation: 4, shadowOffset: {width: 10, height: 10,}, shadowColor: "black", shadowOpacity: 1.0}}>
            <Ionicons name ="md-arrow-back" size={32} /> 
            <TextInput style={{width: "70%", backgroundColor: "#e6e6e6"}} value={value} onChangeText ={(text)=> setValue(text)} 
            />
            <Ionicons name ="md-send" size={32} /> 
        
        </View>
    </View>
)
}

export default SearchScreen