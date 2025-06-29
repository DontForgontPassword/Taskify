const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const DateService = {
    currentDay: () => {
        const current_date = new Date();
        const current_day = current_date.getDay();

        return Days[current_day];
    },
    currentTime: () => {
        const current_date = new Date();
        const current_hours = current_date.getHours();
        const current_minutes = current_date.getMinutes();

        return `${current_hours}:${current_minutes < 10 ? "0" + current_minutes : current_minutes}`
    }
}

export default DateService;