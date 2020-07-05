describe('overload', () => {
  function someFunc(): number;
  function someFunc(str: string): string;
  function someFunc(str?: string): number | string {
    if (str && str.length < 3) return str;
    if (str && str.length < 5) return str;
    // if (str === undefined) return 1;
    return 1;
  }
  it('someFunc', () => {
    const result = someFunc('aaaaaa');
    expect(result).toStrictEqual(1);
    expect(typeof result).toStrictEqual('number');
    expect(result.length).toBeUndefined();
    expect(() => result.repeat(3)).toThrowError(TypeError);
  });
});
