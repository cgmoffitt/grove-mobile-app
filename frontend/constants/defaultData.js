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
        location: "Lagunita Tennis Courts"
    },
    {
        id: 2,
        title: defaultActivity.COFFEE,
        friend: "Jasmine",
        date: new Date('March 9, 2022 18:00:00'),
        confirmed: true,
        plantedId: SOMEONE_ELSE_ID,
        reflected: false,
        location: "CoHo"
    },
    {
        id: 3,
        title: defaultActivity.HIKING,
        friend: "Coleman",
        date: new Date('March 10, 2022 18:00:00'),
        confirmed: true,
        plantedId: MY_ID,
        reflected: false,
        location: "Marin Trail"
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
        location: "Lagunita Tennis Courts"
    },
    {
        id: 5,
        title: defaultActivity.BAR_HOPPING,
        friend: undefined,
        date: new Date('March 12, 2022 18:00:00'),
        confirmed: false,
        plantedId: MY_ID,
        reflected: false,
        location: "Nolas"
    },
    {
        id: 6,
        title: defaultActivity.COFFEE,
        friend: undefined,
        date: new Date('March 13, 2022 18:00:00'),
        confirmed: false,
        plantedId: MY_ID,
        reflected: false,
        location: "Coho"
    },
    //PENDING ACTIVITIES: date IN FUTURE, confirmed is FALSE, plantedId is "SOMEONE_ELSE" OR "AUTOMATIC"
    /*NO PENDING ACTIVITIES AT START*/
    //Past Activities: date IN PAST, confirmed is TRUE
    {
        id: 7,
        title: defaultActivity.COFFEE,
        friend: "Callie",
        date: new Date('March 1, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: false,
        location: "Lagunita Tennis Courts"
    },
    {
        id: 8,
        title: defaultActivity.TENNIS,
        friend: "Jasmine",
        date: new Date('March 1, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: true,
        location: "Coho"
    },
    {
        id: 9,
        title: defaultActivity.HIKING,
        friend: "Coleman",
        date: new Date('March 1, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: true,
        location: "Marin Trail"
    }
]

const friends = [
    { name: "Callie", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Bar-hopping"]},
    { name: "Mihir", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Bar-hopping"]},
    { name: "Blake", plant: 1, url: require("../assets/friends/jacob.png"), activities: ["Tennis", "Bar-hopping"]},
    { name: "Jasmine", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Bar-hopping", "Coffee"]},
    { name: "Tiff", plant: 1, url: require("../assets/friends/sophia.png"), activities: ["Coffee"]},
    { name: "Chris", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Hiking"]},
    { name: "Johnson", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Hiking"]},
    { name: "Enrique", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Hiking"]},
    { name: "Max", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"] },
    { name: "Camilla", plant: 1, url: require("../assets/friends/jordan.png"), activities: ["Coffee", "Hiking"]},
    { name: "Jacob", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]},
    { name: "Simone", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]},
    { name: "Helena", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]},
    { name: "Tom", plant: 1, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]}
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

const INITIAL_AVAILABILITY = new Array(16).fill(0).map(() => new Array(8).fill(false));

const INITIAL_PREFERENCES = {
    numHangouts: 1,
    focusFriends: DEFAULT_FOCUS_FRIENDS,
    preferredActivities: [{ name: "Hiking" }, { name: "Tennis" }],
    preferredDistance: 0.5,
    availability: INITIAL_AVAILABILITY
}

const steps = {
    ACTIVITY: {
        step: 1,
        title: "Activity",
        progress: "15%"
    },
    LOCATION: {
        step: 2,
        title: "Location",
        progress: "37%"
    },
    DATE: {
        step:3,
        title: "Date/Time",
        progress: "62%"
    },
    FRIENDS: {
        step:4,
        title: "Friends",
        progress: "85%"
    }
}

export {
    ALL_ACTIVITIES,
    friends,
    DEFAULT_FOCUS_FRIENDS,
    DEFAULT_ACTIVITIES,
    defaultActivity,
    ACTIVITY_HEADERS,
    activityHeader,
    MY_ID,
    SOMEONE_ELSE_ID,
    AUTOMATIC_ID,
    INITIAL_PREFERENCES,
    steps
}