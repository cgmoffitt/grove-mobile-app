/**
 * redux/reducers.js
 * 
 * Handles all redux state changes
 * Documentation for all components of the state in ./initialState.js
 * See all helper functions for managing the redux state in ./utils.js
 */

import initialState from './initialState';

const confirmActivity = (activities, activityToUpdate) => {
    return activities.map(activity => {
        if (activity.id === activityToUpdate) {
            return {
                ...activity,
                confirmed: true
            }
        } else {
            return activity
        }
    })
}

const setReflected = (activities, activityToUpdate) => {
    return activities.map(activity => {
        if (activity.id === activityToUpdate) {
            return {
                ...activity,
                reflected: true
            }
        } else {
            return activity
        }
    })
}

const deleteActivity = (activities, activityToDelete) => {
    return activities.filter(activity => activity.id !== activityToDelete)
}

const updateMemory = (activities, activityToUpdate, memory) => {
    return activities.map(activity => {
        if (activity.id === activityToUpdate) {
            let memories = activity.memories ? activity.memories : []
            if (memories.findIndex(thisMemory => thisMemory.uri === memory.uri) !== -1) {
                memories = memories.map(thisMemory => thisMemory.uri === memory.uri ? memory : thisMemory)
            } else {
                memories.push(memory)
            }
            return {
                ...activity,
                memories: memories
            }
        } else {
            return activity
        }
    })
}

const deleteMemory = (activities, activityToUpdate, memoryToDelete) => {
    return activities.map(activity => {
        if (activity.id === activityToUpdate && activity.memories) {
            let memories = activity.memories
            if (memories.findIndex(thisMemory => thisMemory.uri === memoryToDelete.uri) !== -1) {
                memories = memories.filter(thisMemory => thisMemory.uri !== memoryToDelete.uri)
            } 
            return {
                ...activity,
                memories: memories
            }
        } else {
            return activity
        }
    })
}


export default function reducer(state = initialState, action = {}) {


    switch (action.type) {

        /* Actions that change the unread counts in the notification bubbles */
        case 'SET_ACTIVITY_TYPE':
            return {
                ...state,
                selectedActivityType: action.activityType
            }
        case 'SET_ACTIVITIES':
            return {
                ...state,
                activities: action.activities
            }
        case 'ADD_ACTIVITY':
            const nextActivities = state.activities
            nextActivities.push(action.activity)
            return {
                ...state,
                activities: nextActivities
            }
        case 'CONFIRM_ACTIVITY':
            const activitiesAfterConfirm = confirmActivity(state.activities, action.activityId)
            return {
                ...state,
                activities: activitiesAfterConfirm
            }
        case 'SET_REFLECTED':
            const activitiesAfterReflect = setReflected(state.activities, action.activityId)
            return {
                ...state,
                activities: activitiesAfterReflect
            }
        case 'DELETE_ACTIVITY':
            const activitiesAfterDelete = deleteActivity(state.activities, action.activityId)
            return {
                ...state,
                activities: activitiesAfterDelete
            }
        case 'ADD_MEMORY':
            const updatedActivities = updateMemory(state.activities, action.activityId, action.memory)
            return {
                ...state,
                activities: updatedActivities
            }
        case 'DELETE_MEMORY':
            const activitiesAfterDeleteMemory = deleteMemory(state.activities, action.activityId, action.memory)
            return {
                ...state,
                activities: activitiesAfterDeleteMemory
            }
        default:
            return {
                ...state
            }
    }
}