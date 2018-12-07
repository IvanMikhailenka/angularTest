export class RepresentationPartViewModel {
  type: string;
  countInPercent: number;


  constructor(type: string, countInPercent: number) {
    this.type = type;
    this.countInPercent = countInPercent;
  }
}
