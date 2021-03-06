import { workoutTypes } from "./workout.types";
import { Workout } from "../../models/workout";
import { WorkoutType } from "../../models/workout-type";
import { Exercise } from "../../models/exercise";
import { updateErrorMessage } from "../misc/misc.actions";

export const updateWorkoutType = (
  workout: Workout,
  newWorkoutType: WorkoutType
) => {
  window.console.log(workout.exercises);
  const newWorkout: Workout = new Workout(
    newWorkoutType,
    workout.order,
    workout.exercises,
    workout.date
  );
  window.console.log(newWorkout.exercises);
  return {
    payload: {
      currWorkout: newWorkout
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
export const submitWorkout = (userID: number, workout: Workout) => (
  dispatch: any
) => {
  window.console.log(userID);
  fetch("http://localhost:6969/workout/users/workout/create", {
    body: JSON.stringify({
      userId: userID,
      workoutId: workout.type.id
    }),
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*"
    },
    method: "POST"
  })
    .then((resp: any) => {
      if (resp.status === 200) {
        return resp;
      } else if (resp.status === 403) {
        dispatch(
          updateErrorMessage(`Something went pretty wrong${resp.status}`)
        );
      } else if (resp.status === 401) {
        dispatch(updateErrorMessage(`Username or password were incoorect.`));
      } else if (resp.status === 500) {
        dispatch(
          updateErrorMessage(`Something went pretty wrong${resp.status}`)
        );
      } else {
        dispatch(
          updateErrorMessage("it sent but we did something....." + resp.status)
        );
      }
    })
    .then((workoutId: any) => {
      const springExercises = workout.exercises.map((exercise: Exercise) => {
        return {
          userWorkoutId: workoutId,
          exerciseId: exercise.id,
          weight: exercise.weight,
          reps: exercise.rep,
          sets: exercise.set
        };
      });
      fetch("http://localhost:6969/workout/users/workout/create", {
        body: JSON.stringify({
          springExercises
        }),
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-origin": "*"
        },
        method: "POST"
      });
    })
    .then((resp: any) => {
      if (resp.status === 200 || resp.status === 201) {
        dispatch({
          payload: {
            currWorkout: new Workout(new WorkoutType("", 0, "", []), 0, [], "")
          },
          type: workoutTypes.RESET_WORKOUT
        });
      } else {
        dispatch(updateErrorMessage("Failed to post"));
      }
    });
};
