import { Ramen, IRamenBuilder } from './ramen.domain';

export class ShioRamen extends Ramen {
  goma = true;
  constructor(builder: IShioRamenBuilder) {
    super(builder);
    this.goma = builder.goma;
  }
}
export interface IShioRamenBuilder extends IRamenBuilder {
  goma: boolean;
  setGoma(isNeeded: boolean): IShioRamenBuilder;
  build(): ShioRamen;
}
