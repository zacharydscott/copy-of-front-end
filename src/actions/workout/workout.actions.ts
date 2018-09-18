import { workoutTypes } from "./workout.types";
import { Workout } from "../../models/workout";
import { WorkoutType } from "../../models/workout-type";
import { Exercise } from "../../models/exercise";

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

export const changeCurrExercise = (exercise: Exercise) => {
  window.console.log("exercise being changed");
  return {
    payload: {
      currExercise: exercise
    },
    type: workoutTypes.CHANGE_CURR_EXERCISE
  };
};

export const enterExercise = (exercise: Exercise, workout: Workout) => (
  dispatch: any
) => {
  const newWorkout = new Workout(
    workout.type,
    workout.order,
    workout.exercises,
    workout.date
  );
  newWorkout.exercises.push(exercise);
  dispatch({
    payload: {
      currWorkout: newWorkout
    },
    type: workoutTypes.ENTER_EXERCISE
  });

  dispatch(changeCurrExercise(new Exercise("", 0, "", 0, 0, 0)));
};
export const submitWorkout = (workout: Workout) => {
  return;
};
