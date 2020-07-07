import { ShioRamen, IShioRamenBuilder } from '../shioRamen.domain';
import { RamenBuilder } from './ramen.builder';

export class ShioRamenBuilder extends RamenBuilder
  implements IShioRamenBuilder {
  goma = false;
  constructor() {
    super();
  }
  setGoma(isNeeded: boolean): ShioRamenBuilder {
    this.goma = isNeeded;
    return this;
  }
  build = (): ShioRamen => new ShioRamen(this);
}
