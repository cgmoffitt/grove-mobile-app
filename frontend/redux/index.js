/**
 * redux/index.js
 * 
 * Returns the redux store that manages cross-component state for the app
 * Documentation for all components of the state in ./initialState.js
 * See all ways that the state can be modified in ./reducers.js
 * See all helper functions for managing the redux state in ./utils.js
 */

import { createStore } from 'redux';
import reducers from './reducers';
import initialState from './initialState';

export default () => {
    return createStore(reducers, initialState);
};