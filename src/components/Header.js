import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={{height: 45, backgroundColor: "gray"}}>
    <View style={{flexDirection: "row", margin: 5}}>
        <MaterialIcons style={{marginLeft:20}} name="live-tv" size={24} color="black" />
        <Text style={{fontSize: 22, marginLeft: 5}}>AslamTube TV</Text>
    </View>
    
    <View></View>

    
    </View>
  );
}
