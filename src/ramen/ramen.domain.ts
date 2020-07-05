export class Ramen {
  private menma = false;
  private nori = false;
  private size: Size = Size.nami;
  constructor(builder: IRamenBuilder) {
    this.menma = builder.menma;
    this.nori = builder.nori;
    this.size = builder.size;
  }
}
export enum Size {
  nami,
  oomori,
}
export interface IRamenBuilder {
  menma: boolean;
  nori: boolean;
  size: Size;
  setMenma(): IRamenBuilder;
  setNori(): IRamenBuilder;
  changeSize(size: Size): IRamenBuilder;
  build(): Ramen;
}
