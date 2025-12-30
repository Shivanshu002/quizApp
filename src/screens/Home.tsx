import { View, StyleSheet } from 'react-native'
import TopBar from '../components/TopBar'
import CalendarSchedule from '../components/CalendarSchedule'
import DoctorsList from '../components/DoctorsList'

const Home = () => {
    return (
        <View style={style.container}>
            <TopBar />
            <CalendarSchedule />
            <DoctorsList />
        </View>
    )
}

export default Home

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
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