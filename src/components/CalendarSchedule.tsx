import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getNext7Days } from "../utils/dateUtils";
import { generateTimeSlots } from "../utils/timeUtils";

const CalendarSchedule = () => {
    const [selectedDate, setSelectedDate] = useState(11);
    const [dates] = useState(getNext7Days());
    const [timeSlots] = useState(generateTimeSlots());

    const currentDate = new Date();
    const formattedDate = currentDate.getDate();

    console.log("timeSlots", timeSlots);


    const appointment = {
        date: 11,
        time: "1:00 AM",
        doctor: "Dr. Olivia Turner, M.D.",
        desc: "Treatment and prevention of skin and photodermatitis."
    };

    return (
        <View style={styles.main}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingBottom: 10 }}>
                {dates.map((d) => {
                    const isActive = selectedDate === d.date;
                    return (
                        <TouchableOpacity
                            key={d.date}
                            style={[styles.dateBox, isActive && styles.activeDate]}
                            onPress={() => setSelectedDate(d.date)}
                        >
                            <Text style={[styles.dateNumber, isActive && styles.activeText]}>
                                {d.date}
                            </Text>
                            <Text style={[styles.dateLabel, isActive && styles.activeText]}>
                                {d.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {selectedDate === formattedDate && (
                <Text style={styles.headerText}>
                    Today
                </Text>
            )}

            <View style={styles.timeline}>
                <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
                    {timeSlots.map((time) => (
                        <View key={time}>
                            <Text style={styles.timeText}>{time}</Text>

                            {selectedDate === appointment.date && appointment.time === time && (
                                <View style={styles.card}>
                                    <View>
                                        <Text style={styles.cardTitle}>{appointment.doctor}</Text>
                                        <Text style={styles.cardDesc}>{appointment.desc}</Text>
                                    </View>

                                    <View style={styles.iconRow}>
                                        <Ionicons name="checkmark-circle" color="#2F6BFF" size={20} />
                                        <Ionicons name="close-circle" color="#888" size={20} />
                                    </View>
                                </View>
                            )}

                            <View style={styles.dottedLine} />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default CalendarSchedule;

const styles = StyleSheet.create({
    main: {
        backgroundColor: "#E4ECFF",
        padding: 10,
        borderRadius: 20,
        height: 260
    },

    dateBox: {
        width: 55,
        height: 70,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginRight: 12,
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
    },

    activeDate: {
        backgroundColor: "#2F6BFF",
    },

    dateNumber: {
        fontSize: 22,
        fontWeight: "800",
        color: "#000",
    },
    dateLabel: {
        fontSize: 12,
        color: "#000",
    },
    activeText: {
        color: "#fff",
    },

    headerText: {
        textAlign: "center",
        marginVertical: 0,
        fontWeight: "700",
        color: "#2F6BFF",
        fontSize: 15,
    },

    timeline: {
        paddingVertical: 2,
        height:140
    },

    timeText: {
        color: "#2F6BFF",
        fontWeight: "600",
        marginBottom: 5,
    },

    dottedLine: {
        height: 1,
        borderStyle: "dotted",
        borderWidth: 1,
        borderColor: "#b3c6ff",
        marginVertical: 15,
    },

    card: {
        backgroundColor: "#C9D8FF",
        padding: 15,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    cardTitle: {
        fontWeight: "800",
        color: "#1E2A45",
        marginBottom: 5,
    },

    cardDesc: {
        fontSize: 12,
        width: "80%",
        color: "#333",
    },

    iconRow: {
        flexDirection: "row",
        gap: 10,
    },
});
