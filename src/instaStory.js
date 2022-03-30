import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import InstaStory from 'react-native-insta-story';
import * as data from '../data/user'

class InstaStories extends Component {

  render() {
    
    return (
      <InstaStory data={data.data}
        duration={10}
        customSwipeUpComponent={<View>
          <Text>Swipe</Text>
        </View>}
        style={[styles.title,{backgroundColor:"#fff",marginTop:-5}]} />
    )
  }
}
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 12,
    textTransform: 'lowercase',
    marginTop: 5
  },
});

export default InstaStories;
