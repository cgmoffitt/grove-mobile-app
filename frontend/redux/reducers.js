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
        default:
            return {
                ...state
            }
     }
 }