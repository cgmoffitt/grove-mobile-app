

const setActivityType = (activityType, dispatch) => {
    dispatch({ type: 'SET_ACTIVITY_TYPE', activityType: activityType })
}


export {
    setActivityType
}