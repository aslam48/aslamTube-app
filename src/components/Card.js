import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';


const Card = (props) => {
    
    return (
        <View style={{ marginBottom: 8 ,elevation: 4, shadowOffset: {width: 10, height: 10,}, shadowColor: "black", shadowOpacity: 1.0 }}>
            <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} 
            style={{ width: "100%", height: 200}}
            />

            <View style={{flexDirection: "row", margin:5 }}>
               <MaterialIcons name="account-circle" size={38} color="#212121" />

                <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 20, width:Dimensions.get("screen").width -50}} ellipsizeMode="tail" numberOfLines={2}>{props.title}</Text>
                <Text>{props.channel} </Text>
                </View>
                
            </View>
        </View>
    )
}

export default Card