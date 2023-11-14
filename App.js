import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import HomeScreen from './Screens/Home';
import Workouts from './Screens/Workouts';
import Nutrition from './Screens/Nutrition';
import RunTracker from './Screens/RunTracker';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    /*<View style={styles.container}>
      <Text style={styles.allText}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>*/
    <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{backgroundColor: 'white'}} activeColor='black'>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={'black'}size={26}/>) }}/>
        <Tab.Screen name="Workouts" component={Workouts} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="weight" color={'black'}size={26}/>) }}/>
        <Tab.Screen name="Nutrition" component={Nutrition} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="heart" color={'black'}size={26}/>) }}/>
        <Tab.Screen name="RunTracker" component={RunTracker} options={{ tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="run-fast" color={'black'}size={26}/>) }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}