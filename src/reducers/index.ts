import { Workout } from "../models/workout";
import { Exercise } from "../models/exercise";
import { WorkoutSnapshot } from "../models/workout-snapshot";
import { WorkoutType } from "../models/workout-type";
import { ExerciseType } from "../models/exercise-type";
import { infoReducer } from "./infoReducer";
import { userReducer } from "./userReducer";
import { workoutReducer } from "./workoutReducer";
import { combineReducers } from "redux";
/**
 *  Each interface/reducer tracks a descrete aspect of the application
 *    User: user information, including login info, and basic bio info.
 *    Workout: info about the latest workout that is being logged in app by the user.
 *    info: info outside of immediate user input. The history of workouts, possible workout schemes and possible exercises,
 */
export interface IUserState {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  gender: string;
}

export interface IWorkoutState {
  currWorkout: Workout;
  currExercise: Exercise;
}

export interface IInfoState {
  workoutHistory: WorkoutSnapshot[];
  viewWorkout: Workout;
  workoutList: WorkoutType[];
  exerciseList: ExerciseType[];
}

export interface IState {
  user: IUserState;
  workout: IWorkoutState;
  info: IInfoState;
}

export const state = combineReducers<IState>({
  info: infoReducer,
  user: userReducer,
  workout: workoutReducer
});
