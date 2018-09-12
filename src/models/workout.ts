import { Exercise } from "./exercise";

import { WorkoutType } from "./workout-type";
export class Workout {
  public order: number;
  public type: WorkoutType;
  public exercises: Exercise[];

  constructor(type: WorkoutType, order: number) {
    this.type = type;
    this.exercises = [];
    this.order = order;
  }
}
