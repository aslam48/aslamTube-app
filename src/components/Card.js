import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


const Card = () => {
    
    return (
        <View style={{ marginBottom: 8 ,elevation: 4, shadowOffset: {width: 10, height: 10,}, shadowColor: "black", shadowOpacity: 1.0 }}>
            <Image source={{uri: "https://images.unsplash.com/photo-1679464307375-ad8ab6a70029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}} 
            style={{ width: "100%", height: 200}}
            />

            <View style={{flexDirection: "row", margin:5 }}>
               <MaterialIcons name="account-circle" size={38} color="#212121" />

                <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20, width:Dimensions.get("screen").width -50}} ellipsizeMode="tail" numberOfLines={2}>this is amazing context sd sdjk ldfoeivnerkjvnin i iuniuenrinvejrejk  jkjev esfkjkd kjdf kj </Text>
                <Text>this is amazing context </Text>
                </View>
                
            </View>
        </View>
    )
}

export default Card