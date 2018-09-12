import { IWorkoutState } from ".";
import { Exercise } from "../models/exercise";
import { WorkoutType } from "../models/workout-type";
import { Workout } from "../models/workout";
/**
 * See the index.ts file for an explanation of all state properties
 */

const initialState: IWorkoutState = {
  currWorkout: new Workout(new WorkoutType("", 0, ""), 0),
  currExercise: new Exercise("", 0, "", 0, 0, 0)
};
export const workoutReducer = (
  state: IWorkoutState = initialState,
  action: any
) => {
  switch (action.type) {
  }
};
