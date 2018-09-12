import { Workout } from "../models/workout";
import { Exercise } from "../models/exercise";
import { WorkoutSnapshot } from "../models/workout-snapshot";
import { WorkoutType } from "../models/workout-type";
import { ExerciseType } from "../models/exercise-type";
import { infoReducer } from "./infoReducer";
import { userReducer } from "./userReducer";
import { workoutReducer } from "./workoutReducer";
import { combineReducers } from "redux";

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
