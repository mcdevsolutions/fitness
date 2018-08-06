import types from './types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  exercises: {}
});
const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EXERCISES_SUCCESS:
      return state.set('exercises', action.exercises.results);
    default:
      return state;
  }
};

export default workoutReducer;

// ./src/reducers/bookReducer.js
