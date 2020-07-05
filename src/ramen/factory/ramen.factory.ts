import { ShioRamenBuilder } from 'src/ramen/builder/shioRamen.builder';
import { ShoyuRamenBuilder } from 'src/ramen/builder/shoyuRamen.builder';
import { RamenBuilder } from 'src/ramen/builder/ramen.builder';

export enum RamenTypes {
  shoyu,
  shio,
}

export class RamenFactory {
  private static readonly ramenTypeMappings = [
    {
      type: RamenTypes.shoyu,
      class: ShoyuRamenBuilder,
    },
    {
      type: RamenTypes.shio,
      class: ShioRamenBuilder,
    },
    {
      type: undefined,
      class: RamenBuilder,
    },
  ];
  static createRamenBuilder(type: RamenTypes.shoyu): ShoyuRamenBuilder;
  static createRamenBuilder(type: RamenTypes.shio): ShioRamenBuilder;
  static createRamenBuilder(): RamenBuilder;

  static createRamenBuilder(
    type?: RamenTypes,
  ): ShoyuRamenBuilder | ShioRamenBuilder | RamenBuilder {
    const indexOfRamenTypeMapping = RamenFactory.getIndexOfRamenTypeMappings(
      type,
    );
    if (RamenFactory.isOutOfIndex(indexOfRamenTypeMapping))
      throw new Error('Invalid Ramen type received.');
    return new RamenFactory.ramenTypeMappings[indexOfRamenTypeMapping].class();
  }

  private static getIndexOfRamenTypeMappings = (type?: RamenTypes) =>
    RamenFactory.ramenTypeMappings
      .map(map => map.type)
      .findIndex(v => v === type);

  private static isOutOfIndex = (index: number) => {
    if (index < 0) return true;
    return false;
  };
}
