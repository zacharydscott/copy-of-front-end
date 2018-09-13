import { ExerciseType } from "./exercise-type";

export class WorkoutType {
  public name: string;
  public id: number;
  public description: string;
  public exercises: ExerciseType[];
  constructor(
    name: string,
    id: number,
    description: string,
    exercises: ExerciseType[]
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.exercises = exercises;
  }
}
