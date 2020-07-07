import { Ramen, IRamenBuilder, Size } from '../ramen.domain';

export class RamenBuilder implements IRamenBuilder {
  menma = false;
  nori = false;
  size: Size = Size.nami;

  setMenma = (): IRamenBuilder => {
    this.menma = true;
    return this;
  };
  setNori() {
    this.nori = true;
    return this;
  }
  changeSize(size: Size) {
    this.size = size;
    return this;
  }
  build = (): Ramen => new Ramen(this);
}
export interface IRamenFactory {
  createRamenBuilder(): RamenBuilder;
}
