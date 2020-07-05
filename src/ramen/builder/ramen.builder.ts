import { Ramen, IRamenBuilder, SizeMappings } from '../ramen.domain';

export class RamenBuilder implements IRamenBuilder {
  menma = false;
  nori = false;
  size: SizeMappings = SizeMappings.nami;
  constructor() {}
  setMenma = (): IRamenBuilder => {
    this.menma = true;
    return this;
  };
  setNori() {
    this.nori = true;
    return this;
  }
  changeSize(size: SizeMappings) {
    this.size = size;
    return this;
  }
  build = (): Ramen => new Ramen(this);
}
