import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Dimensions, Image} from 'react-native';


const MiniCard = () => {
    return (
        <View style={{ flexDirection: "row", margin: 10, marginBottom: 0}}>
        <Image source={{uri: "https://images.unsplash.com/photo-1679464307375-ad8ab6a70029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}} 
        style={{ width: "45%", height: 100}}
        />
        <View style={{paddingLeft: 7}}>
            <Text style={{width:Dimensions.get("screen").width/2,  fontSize: 17}} ellipsizeMode="tail" numberOfLines={3}> This is amazing course</Text>
            <Text style={{fontSize: 12}}>Coder never quite</Text>
        </View>
    </View>
    )
}

export default MiniCard