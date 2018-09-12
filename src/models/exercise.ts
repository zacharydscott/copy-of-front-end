export class Exercise {
  public name: string;
  public id: number;
  public description: string;
  public weight: number;
  public set: number;
  public rep: number;

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
