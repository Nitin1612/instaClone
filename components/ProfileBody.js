import React from 'react';
import { View, Text, Image } from 'react-native';
import config from '../src/config/icon'
export const ProfileBody = ({
    name,
    accountName,
    profileImage,
    post,
    followers,
    following,
}) => {
    return (
        <View>
            {accountName ? (
                <View
                    style={{
                        flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Text style={{fontSize: 18,fontWeight: 'bold',}}>
                            {accountName}
                       </Text>
                        <Image
                            style={[{ height: 15, width: 15, left: 7 }]}
                            source={config.images.downIcon} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={[{ height: 30, width: 30 }]}
                            source={config.images.plusRoundedIcon} />
                        <Image
                            style={[{ height: 25, width: 25 }]}
                            source={config.images.menuIcon} />
                    </View>
                </View>
            ) : null}
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingVertical: 20,
                }}>
                <View  style={{alignItems: 'center'}}>
                    <Image
                        source={profileImage}
                        style={{
                            resizeMode: 'cover',
                            width: 80,
                            height: 80,
                            borderRadius: 100,
                        }}
                    />
                    <Text style={{
                            paddingVertical: 5,
                            fontWeight: 'bold',
                        }}>
                        {name}
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{post}</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</Text>
                    <Text>Following</Text>
                </View>
            </View>
        </View>
    );
};

