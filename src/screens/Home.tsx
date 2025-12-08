import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Title from '../components/Title'

const Home = () => {
    return (
        <View style={style.container}>
            <Title />

            <View style={style.bannerCon}>
                <Image source={{
                    uri: "https://storyset.com/illustration/online-test/amico#1EEF59FF&hide=&hide=complete"
                }}
                    resizeMode='contain'
                    style={style.banner}
                />
            </View>

            <TouchableOpacity>
                <Text style={style.btn}>Start Now</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Home

const style = StyleSheet.create({
    container: {
        paddingTop: 10
    },
    statusBarStyle: {
        backgroundColor: "black",
        color: "black"
    },
    banner: {
        width: 300,
        height: 300
    },
    bannerCon: {
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        backgroundColor: "red"
    }
})