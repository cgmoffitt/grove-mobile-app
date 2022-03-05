/**
 * redux/reducers.js
 * 
 * Handles all redux state changes
 * Documentation for all components of the state in ./initialState.js
 * See all helper functions for managing the redux state in ./utils.js
 */

 import initialState from './initialState';

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
            let updatedActivities = state.activities
            const activityToUpdate = action.activityId
            updatedActivities = updatedActivities.map(activity => {
                if (activity.id === activityToUpdate){
                    return {
                        ...activity,
                        confirmed: true
                    }
                } else {
                    return activity
                }
            })
            return {
                ...state,
                activities: updatedActivities
            }
        default:
            return {
                ...state
            }
     }
 }