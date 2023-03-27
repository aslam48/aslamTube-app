import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import SearchScreen from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe  from './src/screens/Subscribe';
import { MaterialIcons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'




import {reducer} from './src/reducers/reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reducer)


const Tab = createBottomTabNavigator()


const  RootHome = () => {
 <Tab.Navigator
 screenOptions={({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'explore') {
      iconName = 'explore';
    }else if(route.name === 'suscribe'){
      iconName = 'subscriptions'
    }

    // You can return any component that you like here!
    return <MaterialIcons name={iconName} size={32} color={color} />;
   

  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
})}
 >
  <Tab.Screen name="home" component={RootHome} />
  {/* <Tab.Screen name="explore" component={Explore} /> */}
  <Tab.Screen name="search" component={SearchScreen} />
  <Tab.Screen name="subscriptions" component={Subscribe} />
 </Tab.Navigator>
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
    headerShown: false
  }}
>
        <Tab.Screen name="rootHome" component={Home} />
       {/* <Tab.Screen name="explore" component={Explore} /> */}
        <Tab.Screen name="search" component={SearchScreen} />
        <Tab.Screen name="videoplayer" component={VideoPlayer} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
