const PLANTED_ACTIVITIES = [
    {
        title: "Tennis",
        date: "Monday"
    },
    {
        title: "Bar Hopping",
        date: "Sunday"
    },
    {
        title: "Coffee",
        date: "Saturday"
    }
]
const UPCOMING_ACTIVITIES = [
    {
        title: "Tennis",
        friend: "Mihir",
        date: "Monday"
    },
    {
        title: "Coffee",
        friend: "Jasmine",
        date: "Sunday"
    },
    {
        title: "Hiking",
        friend: "Coleman",
        date: "Saturday"
    }
]
const PENDING_ACTIVITIES = []

const PAST_ACTIVITIES = [
    {
        title: "Tennis",
        friend: "Mihir",
        date: "Monday",
        reflected: false
    },
    {
        title: "Coffee",
        friend: "Jasmine",
        date: "Sunday",
        reflected: true
    },
    {
        title: "Hiking",
        friend: "Coleman",
        date: "Saturday",
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

const DEFAULT_ACTIVITIES = [
    { name: "Hiking" }, 
    { name: "Tennis" }, 
    { name: "Coffee" },
    { name: "Bar Hopping" }
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
    UPCOMING_ACTIVITIES,
    PENDING_ACTIVITIES,
    PLANTED_ACTIVITIES,
    PAST_ACTIVITIES,
    friends,
    DEFAULT_FOCUS_FRIENDS,
    DEFAULT_ACTIVITIES,
    ACTIVITY_HEADERS,
    activityHeader
}