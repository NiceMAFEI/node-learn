{
  let a: string = "123";
  // 直接使用字面量
  let b: number = 123;
  console.log(b);
  let c: "hello" | "world";
  c = "hello";
  c = "world";
  // 多种声明
  let d: boolean | string;
  // c = 'hellll' // 报错
  /**
   * unknown: 表示未知类型声明
   *  是一个安全的any,不能直接赋值给其他类型变量
   */
  // let e: any;
  // c = e
  let e: unknown;
  e = "123";
  // c = e  // 报错

  /**
   * 类型断言
   *  两种语法：
   *      - 变量 as type
   *      - <type>变量
   */
  // b = e // 报错
  // b = e as number;
  b = <number>e;
  /**
   * void: 表示为空，函数不返回
   * never: 表示永远都不会返回结果
   */
  function fun(): void {}
  function fun1(): never {
    throw new Error("报错");
  }
}
