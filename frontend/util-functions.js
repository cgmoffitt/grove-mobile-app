import { MY_ID } from "./constants/defaultData"

//UPCOMING ACTIVITIES: date IN FUTURE AND confirmed IS TRUE
export const filterUpcoming = (activity) => {
    const curDate = new Date()
    return activity.date > curDate && activity.confirmed
}
//PLANTED ACTIVITIES: date IN FUTURE, confirmed IS FALSE, plantedId is "ME"
export const filterPlanted = (activity) => {
    const curDate = new Date()
    return activity.date > curDate && !activity.confirmed && activity.plantedId == MY_ID
}

//PENDING ACTIVITIES: date IN FUTURE, confirmed is FALSE, plantedId is "SOMEONE_ELSE" OR "AUTOMATIC"
export const filterPending = (activity) => {
    const curDate = new Date()
    return activity.date > curDate && !activity.confirmed && activity.plantedId != MY_ID
}

//Past Activities: date IN PAST, confirmed is TRUE
export const filterPast = (activity) => {
    const curDate = new Date()
    return activity.date < curDate && activity.confirmed
}

export const getStandardDate = (date) => {
    return date.toLocaleString('default', { weekday: 'short' }) + ", " + date.toLocaleString('default', { month: 'long' }) + " " + date.getDate()
}