import React from 'react';
import { connect } from 'react-redux';
import * as workoutActions from './actions';
import { createStructuredSelector } from 'reselect';
import { workoutSelector } from './selectors';

class Workouts extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchExercises();
  }

  render() {
    return (
      <div>
        <h1>Im going to be a list of workouts</h1>
        <ul className="list-group">
          {this.props.workouts.map(d => (
            <li key={d.id} className="list-group-item">
              {d.id},{d.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// Maps state from store to props
// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   return {
//     // You can now say this.props.books
//     workouts: state.exercises
//   };
// };
const mapStateToProps = createStructuredSelector({
  workouts: workoutSelector()
});
const mapDispatchToProps = dispatch => {
  return {
    // You can now say this.props.createBook
    // createBook: book => dispatch(bookActions.createBook(book))
    fetchExercises: () => dispatch(workoutActions.fetchExercises())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);
