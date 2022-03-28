import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class InstaStory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={this.props.img} />
        <Text style={styles.title}>{this.props.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 85,
    padding: 5,
    backgroundColor: "#fff"
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: "red"
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    textTransform: 'lowercase',
    marginTop: 5
  },
});

export default InstaStory;
