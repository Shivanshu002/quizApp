import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { doctors } from '../utils/doctors';

const DoctorsList = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {doctors.map((d) => (
                    <View key={d.id} style={styles.card}>
                        <Image source={{ uri: d.avatar }} style={styles.avatar} />

                        <View style={styles.rightContent}>
                            <View style={styles.drName}>
                                <Text style={styles.name}>{d.name}</Text>
                                <Text style={styles.specialty}>{d.specialty}</Text>
                            </View>

                            <View style={styles.bottomRow}>
                                <View style={styles.ratingRow}>
                                    <View style={styles.iconChip}>
                                        <Ionicons name="star-outline" size={18} color="#4A5EFF" />
                                        <Text style={styles.chipText}>{d.rating}</Text>
                                    </View>

                                    <View style={styles.iconChip}>
                                        <Ionicons name="chatbubble-ellipses-outline" size={18} color="#4A5EFF" />
                                        <Text style={styles.chipText}>{d.reviews}</Text>
                                    </View>
                                </View>
                                <View style={styles.fvt}>
                                    <Ionicons
                                        name={d.isFavorite ? "heart" : "heart-outline"}
                                        size={22}
                                        color={d.isFavorite ? "#4A5EFF" : "gray"}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default DoctorsList;


const styles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        backgroundColor: "#fff",
        height: 315
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#CAD6FF",
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 12,
        borderRadius: 16,
        alignItems: "center",
        gap: 14,
    },

    avatar: {
        width: 75,
        height: 75,
        borderRadius: 40,
    },

    rightContent: {
        flex: 1,
        justifyContent: "space-between",
    },

    name: {
        fontSize: 15,
        fontWeight: "700",
        color: "#2341A1",
    },

    specialty: {
        marginTop: 2,
        fontSize: 13,
        color: "#444",
    },

    bottomRow: {
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    ratingRow: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },

    iconChip: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        gap: 6,
    },

    chipText: {
        fontSize: 13,
        color: "#333",
        fontWeight: "600",
    },
    drName: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        paddingHorizontal: 20
    },
    fvt: {
        backgroundColor: "white",
        padding: 7,
        borderRadius: 20
    }
});
