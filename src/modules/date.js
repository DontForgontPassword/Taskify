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
        const currentDate = new Date();
        const currentDay = currentDate.getDay();

        return Days[currentDay];
    },
    currentTime: () => {
        const currentDate = new Date();
        const currentHours = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();

        return `${currentHours}:${currentMinutes < 10 ? "0" + currentMinutes : currentMinutes}`
    }
}

export default DateService;