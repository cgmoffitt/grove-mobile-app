const SOMEONE_ELSE_ID = "SOMEONE_ELSE"
const MY_ID = "ME"
const AUTOMATIC_ID = "AUTOMATIC"

const defaultActivity = {
    HIKING: "Hiking",
    TENNIS: "Tennis",
    COFFEE: "Coffee",
    BAR_HOPPING: "Bar Hopping"
}

const DEFAULT_ACTIVITIES = [
    { name: defaultActivity.HIKING },
    { name: defaultActivity.TENNIS },
    { name: defaultActivity.COFFEE },
    { name: defaultActivity.BAR_HOPPING }
]

const ALL_ACTIVITIES = [
    //UPCOMING ACTIVITIES: date IN FUTURE AND confirmed IS TRUE
    {
        id: 1,
        title: defaultActivity.TENNIS,
        friend: "Mihir",
        date: new Date('March 8, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: false,
    },
    {
        id: 2,
        title: defaultActivity.COFFEE,
        friend: "Jasmine",
        date: new Date('March 9, 2022 18:00:00'),
        confirmed: true,
        plantedId: SOMEONE_ELSE_ID,
        reflected: false,
    },
    {
        id: 3,
        title: defaultActivity.HIKING,
        friend: "Coleman",
        date: new Date('March 10, 2022 18:00:00'),
        confirmed: true,
        plantedId: MY_ID,
        reflected: false,
    },
    //PLANTED ACTIVITIES: date IN FUTURE, confirmed IS FALSE, plantedId is "ME"
    {
        id: 4,
        title: defaultActivity.TENNIS,
        friend: undefined,
        date: new Date('March 11, 2022 18:00:00'),
        confirmed: false,
        plantedId: MY_ID,
        reflected: false,
    },
    {
        id: 5,
        title: defaultActivity.BAR_HOPPING,
        friend: undefined,
        date: new Date('March 12, 2022 18:00:00'),
        confirmed: false,
        plantedId: MY_ID,
        reflected: false,
    },
    {
        id: 6,
        title: defaultActivity.COFFEE,
        friend: undefined,
        date: new Date('March 13, 2022 18:00:00'),
        confirmed: false,
        plantedId: MY_ID,
        reflected: false,
    },
    //PENDING ACTIVITIES: date IN FUTURE, confirmed is FALSE, plantedId is "SOMEONE_ELSE" OR "AUTOMATIC"
    /*NO PENDING ACTIVITIES AT START*/
    //Past Activities: date IN PAST, confirmed is TRUE
    {
        title: defaultActivity.TENNIS,
        friend: "Mihir",
        date: new Date('March 1, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: false
    },
    {
        title: defaultActivity.COFFEE,
        friend: "Jasmine",
        date: new Date('March 1, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: true
    },
    {
        title: defaultActivity.HIKING,
        friend: "Coleman",
        date: new Date('March 1, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: true
    }
]

const friends = [
    { name: "Callie", plant: 1 },
    { name: "Mihir", plant: 1 },
    { name: "Blake", plant: 1 },
    { name: "Jasmine", plant: 1 },
    { name: "Tiff", plant: 1 },
    { name: "Chris", plant: 1 },
    { name: "Johnson", plant: 1 },
    { name: "Enrique", plant: 1 },
    { name: "Max", plant: 1 },
    { name: "Camilla", plant: 1 },
    { name: "Jacob", plant: 1 },
    { name: "Simone", plant: 1 },
    { name: "Helena", plant: 1 },
    { name: "Tom", plant: 1 }
]

const DEFAULT_FOCUS_FRIENDS = [
    { name: "Callie", plant: 1 },
    { name: "Mihir", plant: 1 }
]

const activityHeader = {
    UPCOMING: "Upcoming",
    PENDING: "Pending",
    PLANTED: "Planted",
    PAST: "Past"
}

const ACTIVITY_HEADERS = [
    activityHeader.UPCOMING,
    activityHeader.PENDING,
    activityHeader.PLANTED,
    activityHeader.PAST
]



export {
    ALL_ACTIVITIES,
    friends,
    DEFAULT_FOCUS_FRIENDS,
    DEFAULT_ACTIVITIES,
    ACTIVITY_HEADERS,
    activityHeader,
    MY_ID,
    SOMEONE_ELSE_ID,
    AUTOMATIC_ID
}