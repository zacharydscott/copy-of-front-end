/**
 * This is a workout type (or workout scheme), not a particular user-generated workout. It contains
 * basic information about the workout, including a description and the exercsises that comprise it.
 * It corresponds to the workout table in the RDS.
 *
 * It is used in any place where the workout object needs info such as exercise to-do lists, or descriptions.
 */

export class WorkoutType {
  public name: string;
  public id: number;
  public description: string;
  constructor(name: string, id: number, description: string) {
    this.name = name;
    this.id = id;
    this.description = description;
  }
}
