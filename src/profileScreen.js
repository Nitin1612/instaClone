import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import { ProfileBody } from '../components/ProfileBody';
import config from './config/icon';

let circle = [];
let sqaure = [];

for (let index = 0; index < 3; index++) {
  sqaure.push(
    <View key={index}
      style={{
        width: 120,
        height: 120,
        borderRadius: 0,
        backgroundColor: 'black',
        opacity: 0.03,
        marginHorizontal: 5,
      }}></View>
  )
}

for (let index = 0; index < 6; index++) {
  circle.push(
    <View key={index}>
      {index === 0 ? (
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            borderWidth: 1,
            opacity: 0.7,
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={config.images.plusIcon}
          />
        </View>
      ) : (
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            backgroundColor: 'black',
            opacity: 0.1,
            marginHorizontal: 5,
          }}></View>
      )}
    </View>,
  );
}




class ProfileScreen extends Component {
  render() {
    return (
      <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
        <View style={{ width: '100%', padding: 10 }}>
          <ProfileBody
            name="Nitin"
            accountName="nitiinn1"
            profileImage={require('../assets/users/IMG_1896.jpeg')}
            followers="91"
            following="99"
            post="3"
          />
        </View>
        <View>
          <Button title='Edit Profile' disabled />
        </View>
        <View>
          <Text
            style={{
              padding: 10,
              letterSpacing: 1,
              fontSize: 14,
            }}>
            Story Highlights
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
            }}>
            {circle}
          </ScrollView>
          <Image
            style={[{ height: 25, width: 25 ,marginLeft:180,
            }]}
            source={config.images.gridIcon} />
            <Text style={styles.hairWidth}></Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 2,
            }}>{sqaure}</ScrollView>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hairWidth:{
    opacity:0.09,
    borderBottomColor:'#212121',
    borderBottomWidth : StyleSheet.hairlineWidth
  }
});
export default ProfileScreen;
