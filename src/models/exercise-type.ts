export class ExerciseType {
  public name: string;
  public id: number;
  public description: string;

  /**
   * This is an exercise itself, not a particular rep/set bit of user logged info. This object is used
   * to generate to-do lists for workouts, and to populate the dropdown menu for exercise logging.
   */
  constructor(name: string, id: number, description: string) {
    this.name = name;
    this.id = id;
    this.description = description;
  }
}
