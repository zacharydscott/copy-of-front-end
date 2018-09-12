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
