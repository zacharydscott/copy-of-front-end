import { IInfoState } from ".";
import { WorkoutType } from "../models/workout-type";
import { Workout } from "../models/workout";
import { infoTypes } from "../actions/info/info.types";
/**
 * See the index.ts file for an explanation of all state properties
 */

const initialState: IInfoState = {
  exerciseList: [],
  viewWorkout: new Workout(new WorkoutType("", 0, "", []), 0),
  workoutHistory: [],
  workoutList: []
};
export const infoReducer = (state: IInfoState = initialState, action: any) => {
  switch (action.type) {
    // case fetchTypes.GET_WORKOUT_HISTORY:
    //   return {
    //     ...state,
    //     workoutHistory: action.payload.workoutHistory
    //   };
    case infoTypes.GET_WORKOUT_lIST:
      return {
        ...state,
        workoutList: action.payload.workoutList
      };
    default:
      return state;
  }
};
