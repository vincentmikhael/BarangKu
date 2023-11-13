import * as React from 'react';
import {Home,Detail,Filter, Watchlist,UserProfile} from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function MainApp(){
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
    <Tab.Screen options={{
      tabBarIcon: ({color,size}) =>{
        return <Icon name="home" size={24} style={{color: 'purple'}}/>
      }
    }} name='Home' component={Home}></Tab.Screen>

    <Tab.Screen options={{
      tabBarIcon: ({color,size}) =>{
        return <Icon name="heart" size={24} style={{color: 'purple'}}/>
      }
    }} name='Watchlist' component={Watchlist}></Tab.Screen>
    <Tab.Screen options={{
      tabBarIcon: ({color,size}) =>{
        return <Icon name="user-circle" size={24} style={{color: 'purple'}}/>
      }
    }} name='Profile' component={UserProfile}></Tab.Screen>
  </Tab.Navigator>
  )
}
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name='Main' component={MainApp}></Stack.Screen>
        <Stack.Screen name='Detail' component={Detail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}