import Axios from 'axios';
import types from './types';

// ./src/actions/bookActions.js
// API URL
const apiUrl = 'https://wger.de/api/v2/exercise/?status=2&language=2';
// Sync Action
export const fetchExercisesSuccess = exercises => {
  return {
    type: types.FETCH_EXERCISES_SUCCESS,
    exercises
  };
};
export const fetchExercisesError = () => {
  return {
    type: types.FETCH_EXERCISES_ERRROR
  };
};
//Async Action
export const fetchExercises = () => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return dispatch => {
    // Returns a promise
    return Axios.get(apiUrl)
      .then(response => {
        // Dispatch another action
        // to consume data
        dispatch(fetchExercisesSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchExercisesError());
      });
  };
};
