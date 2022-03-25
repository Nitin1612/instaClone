import React, { Component } from "react";
import {FlatList, ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import config from "./config";
import PushNotification from "react-native-push-notification";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { useScrollToTop } from "@react-navigation/native";
//import LinearGradient from "react-native-linear-gradient";
import * as users from '../data/user'
import InstaStory from "./instaStory";
class InstaClone extends Component {
    constructor() {
        super();
        this.state = {
            liked: false
        };
    }
    likeToggled() {
        this.setState({
            liked: !this.state.liked
        });
    }
    handleNotification() {
        PushNotification.localNotification(
            {
                channelId: "test-channel2",
                title: "ViratKholi",
                message: "liked the post"
            },
            
        )
      //console.log("varudhu");
    }

    renderItem2 = (item) => {
        return <InstaStory name={item.item.name} img={item.item.img} />;
      };
    
    render() {
        const heartIconColor = this.state.liked ? "red" : null;
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Instagram</Text>
                    <Image
                        style={[styles.icon, { height: 28, width: 28,left:100}]}
                        source={config.images.messageIcon} />
                </View>
<ScrollView>

<FlatList
            data={users.user}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => this.renderItem2(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

<View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                            source={{
                                uri: "data:image/jpeg;base64,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"
                            }}
                        />
                        <Text style={{ fontSize: 18, marginLeft: 8 }}> ViratKholi</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggled();
                        this.handleNotification();
                    }}
                >
                    <Image
                        style={{ height: 350, width: 100 + '%' }}
                        source={{
                            uri: "https://pbs.twimg.com/media/FOgnAk9VcAASG0p?format=jpg&name=large"
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]}
                        source={config.images.heartIcon} />
                    <Image
                        style={[styles.icon, { height: 33, width: 35 }]}
                        source={config.images.commentIcon} />
                    <Image
                        style={[styles.icon, { height: 33, width: 35 }]}
                        source={config.images.shareIcon} />
                </View>
                <View style={[styles.userBar]}>
                <Text style={{ fontSize: 18, marginLeft: 8 }}>1276797 likes</Text>
                </View>

                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                            source={{
                                uri: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-tesla-logo-vany-syazahira.jpg"
                            }}
                        />
                        <Text style={{ fontSize: 18, marginLeft: 8 }}> Teslamotors</Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        this.likeToggled();
                    }}
                >
                    <Image
                        style={{ height: 450, width: 100 + '%' }}
                        source={{
                            uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tesla-supercharger-ad-design-template-f1e25dc04076383f803e6a2fe70a5685_screen.jpg?ts=1610150997"
                        }}
                    />
                </TouchableOpacity>
                <View style={styles.iconBar}>
                    <Image
                        style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]}
                        source={config.images.heartIcon} />
                    <Image
                        style={[styles.icon, { height: 33, width: 35 }]}
                        source={config.images.commentIcon} />
                    <Image
                        style={[styles.icon, { height: 33, width: 35 }]}
                        source={config.images.shareIcon} />
                </View>
                <View style={[styles.userBar]}>
                <Text style={{ fontSize: 18, marginLeft: 8 }}>78965 likes</Text>
                </View>
          
            </ScrollView>    
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100 + '%',
        height: 100 + '%'
    },
    header: {
        width: 100 + '%',
        height: 50,
        marginTop: 20,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        flexDirection:'row'
    },
    userBar: {
        width: 100 + '%',
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    iconBar: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 7,
        backgroundColor:'#fff'
    },
    icon: {
        marginLeft: 5
    }


});
export default InstaClone;