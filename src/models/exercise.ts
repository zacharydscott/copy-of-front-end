export class Exercise {
  public name: string;
  public id: number;
  public description: string;
  public weight: number;
  public set: number;
  public rep: number;

  /**
   * This is a specific instaniation of an exercise, including it's exercise type, reps, and sets.
   * This object is used in workouts as an array, to show what a user did for a workout.
   */
  constructor(
    name: string,
    id: number,
    description: string,
    weight: number,
    set: number,
    rep: number
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.weight = weight;
    this.set = set;
    this.rep = rep;
  }
}
