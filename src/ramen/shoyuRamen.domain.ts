import { Ramen, IRamenBuilder } from './ramen.domain';

export class ShoyuRamen extends Ramen {
  heavily: Heavily = Heavily.normal;
  constructor(builder: IShoyuRamenBuilder) {
    super(builder);
    this.heavily = builder.heavily;
  }
}
export enum Heavily {
  heavy = 'koime',
  normal = 'hutu',
  light = 'usume',
}
export interface IShoyuRamenBuilder extends IRamenBuilder {
  heavily: Heavily;
  changeHeavily(heavily: Heavily): IShoyuRamenBuilder;
  build(): ShoyuRamen;
}
