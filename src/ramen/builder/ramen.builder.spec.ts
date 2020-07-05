import { RamenBuilder } from './ramen.builder';
import { Size } from '../ramen.domain';

describe('RamenBuilder', () => {
  let builder: RamenBuilder;
  beforeEach(() => {
    builder = new RamenBuilder();
  });
  it('size', () => {
    const ramen = builder.changeSize(Size.oomori).build();
    expect(ramen).toBeDefined();
  });
  it('size', () => {
    const ramen = builder.changeSize(Size.oomori).build();
    expect(ramen).toBeDefined();
  });
});
