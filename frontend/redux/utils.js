

const setActivityType = (activityType, dispatch) => {
    dispatch({ type: 'SET_ACTIVITY_TYPE', activityType: activityType })
}

const setActivities = (activities, dispatch) => {
    dispatch({ type: 'SET_ACTIVITIES', activities: activities })
}

const addActivity = (activity, dispatch) => {
    dispatch({ type: 'ADD_ACTIVITY', activity: activity })
}

const confirmActivity = (activityId, dispatch) => {
    dispatch({ type: 'CONFIRM_ACTIVITY', activityId: activityId})
}


export {
    setActivityType,
    setActivities,
    addActivity,
    confirmActivity
}