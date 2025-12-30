import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopBar = () => {
    return (
        <View style={style.mainCon}>

            <View style={style.container}>
                <View style={style.titleCon}>
                    <Image
                        source={require('../assets/profile.png')}
                        resizeMode='contain'
                        style={style.banner}
                    />
                    <View>
                        <Text style={style.label}>Hi Welcome Back</Text>
                        <Text style={style.nameText}>John Doe</Text>
                    </View>
                </View>

                <View style={style.iconCon}>
                    <Ionicons name="notifications-outline" size={25} color="black" />
                    <Ionicons name="settings-outline" size={25} color="black" />
                </View>
            </View>

            <View style={style.Childcontainer}>
                <View style={style.iconBox}>
                    <Ionicons name="medkit-outline" size={25} color="#2F6BFF" />
                    <Text style={style.label}>Doctors</Text>
                </View>

                <View style={style.iconBox}>
                    <Ionicons name="heart-outline" size={25} color="#2F6BFF" />
                    <Text style={style.label}>Favorite</Text>
                </View>

                <View style={style.searchBar}>
                    <View style={style.leftCircle}>
                        <Ionicons name="filter" size={20} color="black" />
                    </View>

                    <View style={style.rightCircle}>
                        <Ionicons name="search" size={20} color="#2F6BFF" />
                    </View>
                </View>
            </View>

        </View>
    );
};

export default TopBar;

const style = StyleSheet.create({
    mainCon: {
        marginTop: -10,
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical:5
    },
    banner: {
        width: 40,
        height: 40
    },
    titleCon: {
        flexDirection: "row",
        gap: 10
    },
    nameText: {
        fontSize: 14,
        fontWeight: "800"
    },
    iconCon: {
        flexDirection: "row",
        gap: 10
    },
    Childcontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    iconBox: {
        alignItems: "center",
    },
    label: {
        marginTop: 5,
        color: "#2F6BFF",
        fontSize: 14,
        fontWeight: "500",
    },
    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D7E3FF",
        width: 220,
        height: 42,
        borderRadius: 25,
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    leftCircle: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    rightCircle: {
        width: 35,
        height: 35,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
});
