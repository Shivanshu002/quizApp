
export const generateTimeSlots = () => {
    const slots = [];

    for (let hour = 0; hour < 24; hour++) {
        const time = new Date(2025, 0, 1, hour, 0);

        slots.push(
            time.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
            })
        );
    }

    return slots;
};
