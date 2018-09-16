import { workoutTypes } from "./workout.types";
import { Workout } from "../../models/workout";
import { WorkoutType } from "../../models/workout-type";

export const updateWorkoutType = (
  workout: Workout,
  newWorkoutType: WorkoutType
) => {
  workout.type = newWorkoutType;
  return {
    payload: {
      currWorkorkout: workout
    },
    type: workoutTypes.UPDATE_WORKOUT_TYPE
  };
};
