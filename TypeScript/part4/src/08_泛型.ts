(function () {
  /**
   * 在定义函数，或者类时， 遇到类型不明确就可以使用泛型
   *
   */
  function fn<T>(a: T): T {
    return a;
  }
  //   直接调用，具有泛型的函数
  fn(10); // 不指定泛型
  fn<string>("hello"); // 指定泛型

  function fn2<T, K>(a: T, b: K): T {
    return a;
  }
  fn2<number, string>(123, "helllo");

  interface Inter {
    length: number;
  }
  //   T extends Inter 便是泛型T必须是Inter的实现类
  function fn3<T extends Inter>(a: T): number {
    return a.length;
  }
  const request = fn3("123");
  console.log(request);

  class MyClass<T> {
      name: T;
      constructor(name: T) {
          this.name = name;
      }
  };
  const mc = new MyClass<string>('哈哈哈')
})();
