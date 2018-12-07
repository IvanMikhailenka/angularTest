export class RepresentationModel {
  plaintiffCount: number;
  defendantCount: number;
  otherCount: number;


  constructor(plaintiffCount: number, defendantCount: number, otherCount: number) {
    this.plaintiffCount = plaintiffCount;
    this.defendantCount = defendantCount;
    this.otherCount = otherCount;
  }

  public getTotalCount(): number {
    return this.plaintiffCount + this.defendantCount + this.otherCount;
  }

  public getCountInPercent(count: number): number {
    return count / this.getTotalCount() * 100;
  }
}
