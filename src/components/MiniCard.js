import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Dimensions} from 'react-native';


const MiniCard = () => {
    return (
        <View style={{ marginBottom: 8 ,elevation: 4, shadowOffset: {width: 10, height: 10,}, shadowColor: "black", shadowOpacity: 1.0 }}>
        <Image source={{uri: "https://images.unsplash.com/photo-1679464307375-ad8ab6a70029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}} 
        style={{ width: "100%", height: 200}}
        />
        <View>
            <Text style={{width:Dimensions.get("screen").width/2}} ellipsizeMode="tail" numberOfLines={3}> This is amazing course</Text>
            <Text style={{fontSize: 12}}>Coder never quite</Text>
        </View>
    </View>
    )
}

export default MiniCard