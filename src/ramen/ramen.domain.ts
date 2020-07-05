export class Ramen {
  private menma = false;
  private nori = false;
  private size: SizeMappings = SizeMappings.nami;
  constructor(builder: IRamenBuilder) {
    this.menma = builder.menma;
    this.nori = builder.nori;
    this.size = builder.size;
  }
}
export enum SizeMappings {
  nami = 'nami',
  oomori = 'oomori',
}
export interface IRamenBuilder {
  menma: boolean;
  nori: boolean;
  size: SizeMappings;
  setMenma(): IRamenBuilder;
  setNori(): IRamenBuilder;
  changeSize(size: SizeMappings): IRamenBuilder;
  build(): Ramen;
}
