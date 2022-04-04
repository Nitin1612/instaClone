import React, { Component, useEffect } from 'react';
import SearchScreen from './src/searchScreen';
import NewPost from './src/newPost';
import ActivityScreen from './src/activityScreen';
import ProfileScreen from './src/profileScreen';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import InstaClone from './src/InstaClone';
import Stories from './components/Stories';
import Status from './components/Status';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import linking from './src/linking';
import PushNotification from "react-native-push-notification";
import config from "./src/config/icon";
import MessageScreen from './src/messageScreen';





const App = () => {
  const MainBottomTab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "test-channel2",
        channelName: "Test Channel"
      }
    )
  }

  const MainScreen =() =>{
    return(
      <View style={styles.container}>
      
        <MainBottomTab.Navigator
          screenOptions={{ tabBarActiveTintColor: '#e91e63' }}
          tabBarOptions={{
            activeTintColor: '#212121',
            inactiveTintColor: 'grey',
            showLabel: false,
            style: {
              backgroundColor: "#fff",
            },
          }}>

          <MainBottomTab.Screen
            name="Home"
            component={InstaClone}
            options={{
              headerShown:false,
              tabBarIcon: () => (
                <Image
                  style={[styles.icon, { height: 33, width: 35 }]}
                  source={config.images.homeIcon} />
              ),

            }}

          />
          <MainBottomTab.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{
              headerShown:false,
              tabBarIcon: () => (
                <Image
                  style={[styles.icon, { height: 33, width: 35 }]}
                  source={config.images.searchIcon} />
              ),

            }}
          />
          <MainBottomTab.Screen
            name="NewPost"
            component={NewPost}
            options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (
                <Image
                  style={[styles.icon, { height: 33, width: 35 }]}
                  source={config.images.reelsIcon} />
              ),

            }}
          />
          <MainBottomTab.Screen
            name="ActivityScreen"
            component={ActivityScreen}
            options={{
              headerShown:false,
              tabBarIcon: () => (
                <Image
                  style={[styles.icon, { height: 33, width: 35 }]}
                  source={config.images.heartIcon} />
              ),

            }}
          />
          <MainBottomTab.Screen
            name="ProfileScreen"
            path="profile"
            component={ProfileScreen}
            options={{
              headerShown:false,
              tabBarIcon: () => (
                <Image
                  style={[styles.icon, { height: 33, width: 35 }]}
                  source={config.images.profileIcon} />
              ),

            }}
          />
        </MainBottomTab.Navigator>
    </View>

    );
  };
  useEffect(() => {
    createChannel();
  }, []);
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
          screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
        }}>
        <Stack.Screen name="Bottom" component={MainScreen} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems:'center',
    backgroundColor: '#F5FCFF'
  }
});
