import { ShoyuRamen, IShoyuRamenBuilder, Heavily } from '../shoyuRamen.domain';
import { RamenBuilder } from './ramen.builder';

export class ShoyuRamenBuilder extends RamenBuilder
  implements IShoyuRamenBuilder {
  heavily: Heavily = Heavily.normal;
  constructor() {
    super();
  }
  changeHeavily(heavily: Heavily): ShoyuRamenBuilder {
    this.heavily = heavily;
    return this;
  }
  build = (): ShoyuRamen => new ShoyuRamen(this);
}
export interface IRamenFactory {
  createRamenBuilder(type: 'shoyu'): ShoyuRamenBuilder;
}
