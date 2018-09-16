import { Exercise } from "./exercise";

import { WorkoutType } from "./workout-type";
export class Workout {
  public order: number;
  public date: string;
  public type: WorkoutType;
  public exercises: Exercise[];

  constructor(
    type: WorkoutType,
    order: number,
    exercises: Exercise[],
    date: string
  ) {
    this.type = type;
    this.exercises = exercises;
    this.order = order;
    this.date = date;
  }
}
