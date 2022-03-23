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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import linking from './src/linking';
import PushNotification from "react-native-push-notification";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import config from "./src/config/index";
Icon.loadFont();





const App = () => {
  const MainBottomTab = createBottomTabNavigator();

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: "test-channel",
        channelName: "Test Channel"
      }
    )
  }
  useEffect(() => {
    createChannel();
  }, []);
  return (
    <View style={styles.container}>
      <NavigationContainer linking={linking}>
        <MainBottomTab.Navigator 
        initialRouteName="InstaClone"
        screenOptions={{tabBarActiveTintColor: '#e91e63'}}
        tabBarOptions={{
          activeTintColor: '#212121',
          inactiveTintColor: 'grey',
          showLabel: true,
          style: {
            backgroundColor: "#fff",
          },
        }}>
          
          <MainBottomTab.Screen
            name="InstaClone"
            component={InstaClone}
            options={{
              tabBarIcon: ({ color, size }) => (
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
              tabBarIcon: ({ color, size }) => (
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
              tabBarIcon: ({ color, size }) => (
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
              tabBarIcon: ({ color, size }) => (
                <Image
                        style={[styles.icon, { height: 33, width: 35 }]}
                        source={config.images.profileIcon} />
              ),
              
            }}
          />
        </MainBottomTab.Navigator>
      </NavigationContainer>
    </View>
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
