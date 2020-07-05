describe('spread test', () => {
  type PossiblyUndefined = {
    possiblyUndefinedId?: number;
  };
  type User =
    | {
        id: number;
        name: string;
      }
    | {
        name: string;
      };
  describe('normal', () => {
    const createUser = (
      name: string,
      possiblyUndefined?: PossiblyUndefined,
    ): User => {
      if (typeof possiblyUndefined?.possiblyUndefinedId === 'number')
        return {
          name,
          id: possiblyUndefined.possiblyUndefinedId,
        };
      return {
        name,
      };
    };
    it("'name', {possiblyUndefinedId: 1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 1000,
      });
      expect(user).toStrictEqual({
        name: 'name',
        id: 1000,
      });
    });
    it("'name', {possiblyUndefinedId: -1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: -1000,
      });
      expect(user).toStrictEqual({
        name: 'name',
        id: -1000,
      });
    });
    it("'name', {possiblyUndefinedId: 0}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 0,
      });
      expect(user).toStrictEqual({
        id: 0,
        name: 'name',
      });
    });
    it("'name', {possiblyUndefinedId: undefined}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: undefined,
      });
      expect(user).toStrictEqual({
        name: 'name',
      });
    });
    it("'name'", () => {
      const user = createUser('name');
      expect(user).toStrictEqual({
        name: 'name',
      });
    });
    it("'name', {}", () => {
      const user = createUser('name', {});
      expect(user).toStrictEqual({
        name: 'name',
      });
    });
  });
  describe('spread', () => {
    const createUser = (
      name: string,
      possiblyUndefined?: PossiblyUndefined,
    ): User => ({
      name,
      ...(typeof possiblyUndefined?.possiblyUndefinedId === 'number' && {
        id: possiblyUndefined.possiblyUndefinedId,
      }),
    });
    it("'name', {possiblyUndefinedId: 1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 1000,
      });
      expect(user).toStrictEqual({
        name: 'name',
        id: 1000,
      });
    });
    it("'name', {possiblyUndefinedId: -1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: -1000,
      });
      expect(user).toStrictEqual({
        name: 'name',
        id: -1000,
      });
    });
    it("'name', {possiblyUndefinedId: 0}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 0,
      });
      expect(user).toStrictEqual({
        id: 0,
        name: 'name',
      });
    });
    it("'name', {possiblyUndefinedId: undefined}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: undefined,
      });
      expect(user).toStrictEqual({
        name: 'name',
      });
    });
    it("'name'", () => {
      const user = createUser('name');
      expect(user).toStrictEqual({
        name: 'name',
      });
    });
    it("'name', {}", () => {
      const user = createUser('name', {});
      expect(user).toStrictEqual({
        name: 'name',
      });
    });
  });
  it('simple spread', () => {
    const createUser = (n?: number): { id: number } | {} => ({
      ...(typeof n == 'number' && {
        id: n,
      }),
    });
    expect(createUser()).toStrictEqual({});
    expect(createUser(1000)).toStrictEqual({
      id: 1000,
    });
    expect(createUser(0)).toStrictEqual({
      id: 0,
    });
  });
});
