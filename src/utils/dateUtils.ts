
export const getNext7Days = () => {
    const days = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(today.getDate() + i);

        days.push({
            date: d.getDate(),
            label: d.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
            fullDate: d,
        });
    }

    return days;
};
