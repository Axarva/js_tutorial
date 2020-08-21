function dayName(date){
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];

    return daysOfTheWeek[date.getDay()]
}
function greeting(dayOfWeek){
    return `Hello world! Happy ${dayName(now)}!`;
}