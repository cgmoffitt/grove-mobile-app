/**
 * redux/initialState.js
 * 
 * Defines the initial redux state of the app.
 * All aspects of the state that are controlled by redux are also documented below inline
 */

import {
  ACTIVITY_HEADERS,
  activityHeader,
  ALL_ACTIVITIES,
  INITIAL_PREFERENCES
} from "../constants/defaultData"


 export default {
    selectedActivityType: activityHeader.UPCOMING,
    activities: ALL_ACTIVITIES,
    preferences: INITIAL_PREFERENCES
  };