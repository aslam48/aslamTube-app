import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import SearchScreen from './src/screens/Search';
import Constant from 'expo-constants'


export default function App() {
  return (
    <View style={{marginTop:Constant.statusBarHeight ,flex: 1}}>
     {/* <Home /> */}
     <SearchScreen />
    </View>
  );
}
