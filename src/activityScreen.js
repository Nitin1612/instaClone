import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from '../components/title';

class ActivityScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title title="Activity Screen" />        
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

export default ActivityScreen;
