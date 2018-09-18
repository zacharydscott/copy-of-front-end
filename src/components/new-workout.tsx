import * as React from "react";
import { connect } from "react-redux";
import { Workout } from "../models/workout";
import { IState } from "../reducers";
import { Exercise } from "../models/exercise";
import {
  updateWorkoutType,
  changeCurrExercise,
  enterExercise,
  submitWorkout
} from "../actions/workout/workout.actions";
import { WorkoutType } from "../models/workout-type";
import {
  updateWorkText,
  updateExerText,
  updateErrorMessage
} from "../actions/misc/misc.actions";
import { getWorkoutList, getExerciseList } from "../actions/info/info.actions";
import { ExerciseType } from "../models/exercise-type";
interface IProps {
  exerciseList: ExerciseType[];
  exerciseTypeText: string;
  workoutTypeText: string;
  workout: Workout;
  currExercise: Exercise;
  workoutList: WorkoutType[];
  errorMessgae: string;
  enterExercise: (exercise: Exercise, workout: Workout) => any;
  changeCurrExercise: (exercise: Exercise) => any;
  getWorkoutList: () => any;
  getExerciseList: () => any;
  updateErrorMessage: (message: string) => any;
  updateWorkText: (text: string) => any;
  updateExerText: (text: string) => any;
  updateWorkoutType: (workout: Workout, workoutType: WorkoutType) => any;
  submitWorkout: (workout: Workout) => any;
}

class NewWorkout extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.updateType = this.updateType.bind(this);
    this.changeWorkText = this.changeWorkText.bind(this);
    this.changeExercise = this.changeExercise.bind(this);
    this.enterExercise = this.enterExercise.bind(this);
    this.submit = this.submit.bind(this);
  }

  public submit(e: any) {
    e.preventDefault();
    this.props.submitWorkout(this.props.workout);
  }
  public updateType(e: any) {
    e.preventDefault();
    const newType = this.props.workoutList.find(type => {
      return !!type.id === e.target.key;
    });

    this.props.updateWorkoutType(
      this.props.workout,
      newType || this.props.workoutList[0]
    );
  }
  public enterExercise(e: any) {
    e.preventDefault();
    if (
      this.props.currExercise.weight !== 0 &&
      this.props.currExercise.rep !== 0 &&
      this.props.currExercise.set !== 0
    ) {
      this.props.enterExercise(this.props.currExercise, this.props.workout);
    } else {
      this.props.updateErrorMessage(
        "Make sure you selected an exercise type and filled in weight, set, and reps."
      );
    }
  }
  public changeWorkText(e: any) {
    e.preventDefault();

    this.props.updateWorkText(e.target.value);
  }
  public changeExerText(e: any) {
    e.preventDefault();

    this.props.updateExerText(e.target.value);
  }
  public componentDidMount() {
    if (this.props.workoutList[0] === undefined) {
      this.props.getExerciseList();
      // this.props.getWorkoutList();
    }
  }

  public changeExercise(e: any) {
    e.preventDefault();
    switch (e.target.id) {
      case "weight":
        const exercise1 = new Exercise(
          this.props.currExercise.name,
          this.props.currExercise.id,
          this.props.currExercise.description,
          this.props.currExercise.weight,
          this.props.currExercise.set,
          this.props.currExercise.rep
        );
        exercise1.weight = +e.target.value;
        window.console.log(exercise1.weight);
        this.props.changeCurrExercise(exercise1);
        break;
      case "rep":
        const exercise2 = new Exercise(
          this.props.currExercise.name,
          this.props.currExercise.id,
          this.props.currExercise.description,
          this.props.currExercise.weight,
          this.props.currExercise.set,
          this.props.currExercise.rep
        );
        exercise2.rep = +e.target.value;
        this.props.changeCurrExercise(exercise2);
        break;
      case "set":
        const exercise3 = new Exercise(
          this.props.currExercise.name,
          this.props.currExercise.id,
          this.props.currExercise.description,
          this.props.currExercise.weight,
          this.props.currExercise.set,
          this.props.currExercise.rep
        );
        exercise3.set = +e.target.value;
        this.props.changeCurrExercise(exercise3);
        break;
      default:
        this.props.changeCurrExercise(
          new Exercise("asdf", 4321, "asdsad", 123, 123, 123)
        );
    }
  }
  public render() {
    const workList = (
      <div>
        {this.props.workoutList.map(workType => {
          if (
            workType.name
              .slice(0, this.props.workoutTypeText.length)
              .toLocaleLowerCase() ===
            this.props.workoutTypeText.toLocaleLowerCase()
          ) {
            return (
              <a className="dropdown-item" key={workType.id} href="#">
                <p key={workType.id}>{workType.name}</p>
              </a>
            );
          }
          return;
        })}
      </div>
    );

    const exerList = (
      <div>
        {this.props.exerciseList.map((exerType: ExerciseType) => {
          if (
            exerType.name
              .slice(0, this.props.exerciseTypeText.length)
              .toLocaleLowerCase() ===
            this.props.exerciseTypeText.toLocaleLowerCase()
          ) {
            return (
              <a className="dropdown-item" key={exerType.id} href="#">
                <p key={exerType.id}>{exerType.name}</p>
              </a>
            );
          }
          return;
        })}
      </div>
    );
    let keyVal = 0;
    const exerciseTable = this.props.workout.exercises.map(
      (exercise: Exercise) => {
        keyVal++;
        return (
          <tr key={keyVal}>
            <th scope="row">{exercise.name}</th>
            <th>{exercise.weight}</th>
            <th>{exercise.rep}</th>
            <th>{exercise.set}</th>
          </tr>
        );
      }
    );

    return (
      <div>
        {this.props.workout.exercises.length}
        <p> {this.props.exerciseList[0]}</p>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <input
              type="text"
              value={this.props.workoutTypeText}
              onChange={this.changeWorkText}
            />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {workList}
          </div>
        </div>
        <p>{this.props.errorMessgae}</p>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <input
              type="text"
              value={this.props.exerciseTypeText}
              onChange={this.changeExerText}
            />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {exerList}
          </div>
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Weight</span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="With textarea"
            id="weight"
            value={this.props.currExercise.weight}
            onChange={this.changeExercise}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Reps</span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="With textarea"
            id="rep"
            value={this.props.currExercise.rep}
            onChange={this.changeExercise}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Sets</span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="With textarea"
            id="set"
            value={this.props.currExercise.set}
            onChange={this.changeExercise}
          />
        </div>
        <button className="btn btn-primary" onClick={this.enterExercise}>
          Enter Exercise
        </button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">exercise</th>
              <th scope="col">weight</th>
              <th scope="col">rep</th>
              <th scope="col">set</th>
            </tr>
          </thead>
          <tbody>
            {exerciseTable}
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {
    currExercise: state.workout.currExercise,
    errorMessgae: state.misc.errorMessage,
    exerciseList: state.info.exerciseList,
    exerciseTypeText: state.misc.exerciseTypeText,
    workout: state.workout.currWorkout,
    workoutList: state.info.workoutList,
    workoutTypeText: state.misc.workoutTypeText
  };
};

const mapDispatchToProps = {
  changeCurrExercise,
  enterExercise,
  getExerciseList,
  getWorkoutList,
  submitWorkout,
  updateErrorMessage,
  updateExerText,
  updateWorkText,
  updateWorkoutType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWorkout);
