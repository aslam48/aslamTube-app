import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Constant from 'expo-constants'

export default function Header() {
    const myColor = "#212121"
  return (
    <View style={{ 
      marginTop:Constant.statusBarHeight 
      ,height: 45, backgroundColor: "gray", flexDirection: "row", justifyContent: "space-between", elevation: 4, shadowOffset: {width: 10, height: 10,}, shadowColor: "black", shadowOpacity: 1.0 }}>

    <View style={{flexDirection: "row", margin: 5}}>
        <MaterialIcons style={{marginLeft:20}} name="live-tv" size={24} color="black" />
        <Text style={{fontSize: 22, marginLeft: 5, fontWeight: "bold"}}>AslamTube TV</Text>
    </View>

    <View style={{ flexDirection: "row", justifyContent: "space-around", width: 150, marginTop: 5, marginRight: 8}}>
        <Ionicons style={{marginLeft:30}} name="md-videocam" size={24} color={myColor} />
        <Ionicons style={{marginLeft:30}} name="md-search" size={24} color={myColor} />
        <MaterialIcons style={{marginLeft:30}} name="account-circle" size={24} color={myColor} />
    </View>

    
    </View>
  );
}
