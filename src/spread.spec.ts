describe('spread test', () => {
  describe('normal', () => {
    function createUser(
      name: string,
    ): {
      name: string;
    };
    function createUser(
      name: string,
      possiblyUndefined: {
        possiblyUndefinedId: number;
      },
    ): {
      id: number;
      name: string;
    };
    function createUser(
      name: string,
      possiblyUndefined: {
        possiblyUndefinedId?: number;
      },
    ): {
      id: number;
      name: string;
    };
    function createUser(
      name: string,
      possiblyUndefined?: {
        possiblyUndefinedId?: number;
      },
    ):
      | {
          name: string;
        }
      | {
          id: number;
          name: string;
        } {
      if (typeof possiblyUndefined?.possiblyUndefinedId === 'number')
        return {
          name,
          id: possiblyUndefined.possiblyUndefinedId,
        };
      return {
        name,
      };
    }
    it("'name', {possiblyUndefinedId: 1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 1000,
      });
      expect(user.id).toBe(1000);
      expect(user).toStrictEqual({
        name: 'name',
        id: 1000,
      });
    });
    it("'name', {possiblyUndefinedId: -1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: -1000,
      });
      expect(user.id).toBe(-1000);
      expect(user).toStrictEqual({
        name: 'name',
        id: -1000,
      });
    });
    it("'name', {possiblyUndefinedId: 0}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 0,
      });
      expect(user.id).toBe(0);
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
    function createUser(
      name: string,
      possiblyUndefined: {
        possiblyUndefinedId: number;
      },
    ): {
      id: number;
      name: string;
    };
    function createUser(
      name: string,
      possiblyUndefined?: {
        possiblyUndefinedId?: undefined;
      },
    ): {
      name: string;
    };
    function createUser(
      name: string,
      possiblyUndefined?: {
        possiblyUndefinedId?: number;
      },
    ):
      | {
          id: number;
          name: string;
        }
      | {
          name: string;
        } {
      return {
        name,
        ...(typeof possiblyUndefined?.possiblyUndefinedId === 'number' && {
          id: possiblyUndefined.possiblyUndefinedId,
        }),
      };
    }
    it("'name', {possiblyUndefinedId: 1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 1000,
      });
      expect(user.id).toBe(1000);
      expect(user).toStrictEqual({
        name: 'name',
        id: 1000,
      });
    });
    it("'name', {possiblyUndefinedId: -1000}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: -1000,
      });
      expect(user.id).toBe(-1000);
      expect(user).toStrictEqual({
        name: 'name',
        id: -1000,
      });
    });
    it("'name', {possiblyUndefinedId: 0}", () => {
      const user = createUser('name', {
        possiblyUndefinedId: 0,
      });
      expect(user.id).toBe(0);
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
