import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Title from '../components/Title'

const Home = () => {
    return (
        <View style={style.container}>
            <Title />

            <Image
                source={require('../assets/splash.png')}
                resizeMode='contain'
                style={style.banner}
            />

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