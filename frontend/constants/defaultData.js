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
    { title: defaultActivity.HIKING },
    { title: defaultActivity.TENNIS },
    { title: defaultActivity.COFFEE },
    { title: defaultActivity.BAR_HOPPING }
]

const plantToImage = {
    2: require("../assets/plants/grove_updated2.png"),
    3: require("../assets/plants/grove_updated3.png"),
    4: require("../assets/plants/grove_updated4.png"),
    5: require("../assets/plants/grove_updated5.png"),
    6: require("../assets/plants/grove_updated6.png"),
    7: require("../assets/plants/grove_updated7.png"),
    8: require("../assets/plants/grove_updated8.png"),
    9: require("../assets/plants/grove_updated9.png"),
}

const ALL_ACTIVITIES = [
    //UPCOMING ACTIVITIES: date IN FUTURE AND confirmed IS TRUE
    {
        id: 1,
        title: defaultActivity.TENNIS,
        friend: "Mihir",
        date: new Date('March 11, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: false,
        location: "EVGR Courts",
    },
    {
        id: 2,
        title: defaultActivity.COFFEE,
        friend: "Jasmine",
        date: new Date('March 12, 2022 18:00:00'),
        confirmed: true,
        plantedId: SOMEONE_ELSE_ID,
        reflected: false,
        location: "CoHo"
    },
    {
        id: 3,
        title: defaultActivity.HIKING,
        friend: "Coleman",
        date: new Date('March 13, 2022 18:00:00'),
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
        location: "EVGR Courts"
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
        date: new Date('March 3, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: false,
        location: "Verve Coffee"
    },
    {
        id: 8,
        title: defaultActivity.TENNIS,
        friend: "Jasmine",
        date: new Date('March 2, 2022 18:00:00'),
        confirmed: true,
        plantedId: AUTOMATIC_ID,
        reflected: true,
        location: "EVGR Courts"
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
    { name: "Callie", plant: 2, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Bar-hopping"]},
    { name: "Mihir", plant: 3, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Bar-hopping"]},
    { name: "Blake", plant: 5, url: require("../assets/friends/jacob.png"), activities: ["Tennis", "Bar-hopping"]},
    { name: "Jasmine", plant: 9, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Bar-hopping", "Coffee"]},
    { name: "Tiff", plant: 6, url: require("../assets/friends/sophia.png"), activities: ["Coffee"]},
    { name: "Chris", plant: 2, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Hiking"]},
    { name: "Johnson", plant: 2, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Hiking"]},
    { name: "Enrique", plant: 3, url: require("../assets/friends/nirali.jpeg"), activities: ["Tennis", "Hiking"]},
    { name: "Max", plant: 7, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"] },
    { name: "Camilla", plant: 6, url: require("../assets/friends/jordan.png"), activities: ["Coffee", "Hiking"]},
    { name: "Jacob", plant: 3, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]},
    { name: "Simone", plant: 4, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]},
    { name: "Helena", plant: 2, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]},
    { name: "Tom", plant: 3, url: require("../assets/friends/nirali.jpeg"), activities: ["Coffee", "Hiking"]}
]

const ProfileInfo = {
    name: "Amelia",
    email: "amelia@email.com",
    url: require("../assets/profile/amelia_profile.jpeg"), 
    activities: ["Coffee", "Hiking"]
}

const DEFAULT_FOCUS_FRIENDS = [
    { name: "Callie", plant: 2 },
    { name: "Mihir", plant: 3 }
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
    },
    CONFIRM: {
        step:5,
        title: "Confirm",
        progress: "100%"
    }
}

const NEARBY_LOCATIONS = [
    {
        name: "Verve Coffee",
        distance: "10 miles",
        coordinate: {
            latitude: 37.79825,
            longitude: -122.4224
        },
        uri: "http://www.thatveganlifedoe.com/wp-content/uploads/2016/02/3.jpg"
    },
    {
        name: "Casa Blanka",
        distance: "10 miles",
        coordinate: {
            latitude: 37.77825,
            longitude: -122.4414
        },
        uri: "https://media-cdn.tripadvisor.com/media/photo-s/0c/be/2d/a9/la-casa-blanca-restaurant.jpg"
    },
    {
        name: "Pizza Royal",
        distance: "10 miles",
        coordinate: {
            latitude: 37.76825,
            longitude: -122.4300
        },
        uri:"https://img.restaurantguru.com/w550/h367/r6fb-meals-Pizza-Royal-2021-09-3.jpg"
    }
]

const ACTIVITY_IMG_SOURCES = {
    tennis: require("../assets/images/activity-icons/tennis.png"),
    coffee: require("../assets/images/activity-icons/coffee.png"),
    hiking: require("../assets/images/activity-icons/hiking.png"),
    ["bar-hopping"]: require("../assets/images/activity-icons/bar-hopping.png")
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
    steps,
    ProfileInfo,
    plantToImage,
    NEARBY_LOCATIONS,
    ACTIVITY_IMG_SOURCES
}