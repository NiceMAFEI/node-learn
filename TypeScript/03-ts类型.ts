{
  /**
   * object 表示一个js对象
   *  一般不使用, 属性名后面加?表示属性是可选的
   */
  let a: { name: string; age?: number };
  a = {
    name: "123",
  };
  // [propName: string]: any 表示任意类型的属性
  let b: { name: string; [propName: string]: unknown };
  b = {
    name: "12331",
    age: 123,
    gender: "123312",
  };
}
