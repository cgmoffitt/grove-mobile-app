

const setActivityType = (activityType, dispatch) => {
    dispatch({ type: 'SET_ACTIVITY_TYPE', activityType: activityType })
}

const setActivities = (activities, dispatch) => {
    dispatch({ type: 'SET_ACTIVITIES', activities: activities })
}

const addActivity = (activity, dispatch) => {
    dispatch({ type: 'ADD_ACTIVITY', activity: activity })
}


export {
    setActivityType,
    setActivities,
    addActivity
}