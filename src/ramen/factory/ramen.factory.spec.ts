import { RamenFactory, RamenTypes } from './ramen.factory';
import { RamenBuilder } from 'src/ramen/builder/ramen.builder';
import { ShoyuRamenBuilder } from 'src/ramen/builder/shoyuRamen.builder';
import { ShioRamenBuilder } from 'src/ramen/builder/shioRamen.builder';
import { Size, Ramen } from '../ramen.domain';
import { Heavily, ShoyuRamen } from '../shoyuRamen.domain';

describe('RamenFactory', () => {
  it('Ramen', () => {
    const builder = RamenFactory.createRamenBuilder();
    expect(builder).toBeInstanceOf(RamenBuilder);
    const ramen = builder.changeSize(Size.oomori).build();
    expect(ramen).toBeInstanceOf(Ramen);
  });
  it('Shoyu', () => {
    const builder = RamenFactory.createRamenBuilder(RamenTypes.shoyu);
    expect(builder).toBeInstanceOf(ShoyuRamenBuilder);
    const ramen = builder
      .changeSize(Size.oomori)
      .setNori()
      .changeHeavily(Heavily.heavy)
      .build();
    expect(ramen).toBeInstanceOf(ShoyuRamen);
  });
  it('Shio', () => {
    const builder = RamenFactory.createRamenBuilder(RamenTypes.shio);
    expect(builder).toBeInstanceOf(ShioRamenBuilder);
  });
});
