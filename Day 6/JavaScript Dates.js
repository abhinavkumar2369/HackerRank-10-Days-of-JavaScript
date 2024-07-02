function getDayName(dateString) {
    let dayName;

    let day = new Date(dateString);
    dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][day.getDay()];
    return dayName;
}