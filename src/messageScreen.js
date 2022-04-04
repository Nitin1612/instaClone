import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from '../components/title';

class MessageScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title title="Message Screen" />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default MessageScreen;
