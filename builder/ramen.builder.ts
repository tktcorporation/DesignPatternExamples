import { Ramen, IRamenBuilder, SizeMappings } from './ramen.domain';

export class RamenBuilder implements IRamenBuilder {
  menma = false;
  nori = false;
  size: SizeMappings = SizeMappings.nami;
  constructor() {}
  setMenma = (): IRamenBuilder => {
    this.menma = true;
    return this;
  };
  setNori = (): IRamenBuilder => {
    this.nori = true;
    return this;
  };
  changeSize = (size: SizeMappings): IRamenBuilder => {
    this.size = size;
    return this;
  };
  build = (): Ramen => new Ramen(this);
}
