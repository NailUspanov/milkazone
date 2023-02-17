export class Agglomashia {
  id: number;
  name: string;
  date: Date;
  replacementDaysLeft: number;
  prediction: number;

  //   image: ModelImage; ???
  //   warnings: WarningModel[];
  //   bearings: BearingModel[];

  constructor(source: any) {
    this.id = source.id;
    this.name = source.name;
    this.date = source.date;
    this.replacementDaysLeft = source.replacementDaysLeft;
    this.prediction = source.prediction;
    // this.image = source.image;
    // this.warnings = mapMany(WarningModel)(source.warnings);
    // this.bearings = mapMany(BearingModel)(source.bearings);
  }
}
