import { createSelector } from 'reselect';

const selectGlobal = state => state.get('workout');

const workoutSelector = () =>
  createSelector(selectGlobal, globalState => globalState.get('exercises'));

export { workoutSelector };
