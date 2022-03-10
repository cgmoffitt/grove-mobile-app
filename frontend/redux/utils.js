

const setActivityType = (activityType, dispatch) => {
    dispatch({ type: 'SET_ACTIVITY_TYPE', activityType: activityType })
}

const setActivities = (activities, dispatch) => {
    dispatch({ type: 'SET_ACTIVITIES', activities: activities })
}

const addActivity = (activity, dispatch) => {
    console.log("in redux")
    dispatch({ type: 'ADD_ACTIVITY', activity: activity })
}

const confirmActivity = (activityId, dispatch) => {
    dispatch({ type: 'CONFIRM_ACTIVITY', activityId: activityId})
}

const addMemory = (activityId, memory, dispatch) => {
    dispatch({ type: 'ADD_MEMORY', activityId: activityId, memory: memory})
}


export {
    setActivityType,
    setActivities,
    addActivity,
    confirmActivity,
    addMemory
}