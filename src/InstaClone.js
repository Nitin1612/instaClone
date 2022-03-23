import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import config from "./config";
import PushNotification from "react-native-push-notification";

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
                channelId: "test-channel",
                title: "ViratKholi",
                message: "You liked the post"
            }
        )
        //console.log("varudhu");

    }
    render() {
        const heartIconColor = this.state.liked ? "red" : null;
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Instagram</Text>
                    <Image
                        style={[styles.icon, { height: 28, width: 28,left:100}]}
                        source={config.images.shareIcon} />
                </View>
<ScrollView>
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
                        this.handleNotification();
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





                <View style={styles.userBar}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUhHjT4C29V3e6lbtoV0QzJuqvVjNIvzIiw&usqp=CAU"
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