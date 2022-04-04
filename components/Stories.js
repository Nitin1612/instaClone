import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import config from '../src/config/icon'

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: 'Your Story',
      image: require('../assets/users/IMG_1896.jpeg'),
      story: require('../assets/users/dhoni.jpg')
    },
    {
      id: 0,
      name: 'viratkholi',
      image: require('../assets/users/virat.png.jpg'),
    },
    {
      id: 0,
      name: 'elonmusk',
      image: require('../assets/users/elon.webp'),
    },
    {
      id: 0,
      name: 'msdhoni',
      image: require('../assets/users/dhoni.jpg'),
    },
    ,
    {
      id: 0,
      name: 'anirudh',
      image: require('../assets/users/ani.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'yuvan',
      image: require('../assets/users/yuvan.jpg'),
    },
  ];


  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20, backgroundColor: '#fff' }}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.story
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Image
                    style={[{ height: 25, width: 25 }]}
                    source={config.images.addIcon} />
                </View>
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  );
};

export default Stories;
