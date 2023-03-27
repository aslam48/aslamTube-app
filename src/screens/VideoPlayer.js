import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, ActivityIndicator, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import Header  from '../components/Header'






const VideoPlayer = ({route}) => {
    const {videoId, title} =  route.params
  return (
    <View style={{flex: 1}}>
            <Header/>

             <View style={{width: "100%", height:200}}>
                <WebView source= {{uri: `https://www.youtube.com/embed/${videoId}`}} javaScriptEnabled={true}
                domStorageEnabled={true}
                />

             </View>
             <Text style={{fontSize: 20, width: Dimensions.get("screen").width -50, margin: 9 }} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
             <View  style={{borderBottomWidth: 1}}/>
    </View>
  )
}

  export default VideoPlayer    