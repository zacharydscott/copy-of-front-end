import * as React from "react";
import { connect } from "react-redux";
import { Workout } from "../models/workout";
import { IState } from "../reducers";
import { Exercise } from "../models/exercise";
import { updateWorkoutType } from "../actions/workout/workout.actions";
import { WorkoutType } from "../models/workout-type";
import { updateWorkText, updateExerText } from "../actions/misc/misc.actions";
import { getWorkoutList, getExerciseList } from "../actions/info/info.actions";
import { ExerciseType } from "../models/exercise-type";
interface IProps {
  exerciseList: ExerciseType;
  exerciseTypeText: string;
  workoutTypeText: string;
  workout: Workout;
  exercise: Exercise;
  workoutList: WorkoutType[];
  errorMessgae: string;
  getWorkoutList: () => any;
  getExerciseList: () => any;
  updateWorkText: (text: string) => any;
  updateExerText: (text: string) => any;
  updateWorkoutType: (workout: Workout, workoutType: WorkoutType) => any;
}

class NewWorkout extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
    this.updateType = this.updateType.bind(this);
    this.changeWorkText = this.changeWorkText.bind(this);
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

  public changeWorkText(e: any) {
    e.preventDefault();

    this.props.updateWorkText(e.target.value);
  }
  public componentDidMount() {
    if (this.props.workoutList[0] === undefined) {
      this.props.getExerciseList();
      this.props.getWorkoutList();
    }
  }
  public render() {
    const workList = (
      <div>
        ss
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

    return (
      <div>
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
      </div>
    );
  }
}
const mapStateToProps = (state: IState) => {
  return {
    errorMessgae: state.misc.errorMessage,
    exercise: state.workout.currExercise,
    exerciseList: state.info.exerciseList,
    exerciseTypeText: state.misc.exerciseTypeText,
    workout: state.workout.currWorkout,
    workoutList: state.info.workoutList,
    workoutTypeText: state.misc.workoutTypeText
  };
};

const mapDispatchToProps = {
  getExerciseList,
  getWorkoutList,
  updateExerText,
  updateWorkText,
  updateWorkoutType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewWorkout);
