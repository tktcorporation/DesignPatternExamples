import { RamenBuilder } from './ramen.builder';
import { SizeMappings } from './ramen.domain';

describe('RamenBuilder', () => {
  let builder: RamenBuilder;
  beforeEach(() => {
    builder = new RamenBuilder();
  });
  it('size', () => {
    const ramen = builder.changeSize(SizeMappings.oomori).build();
    expect(ramen).toBeDefined();
  });
});
