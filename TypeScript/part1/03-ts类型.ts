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
  // c 申明为函数， 接受两个number 类型参数，返回Number
  /**
   * 类似于箭头函数的形式的类型声明：
   *  语法：
   *    (形参: 类型, 形参: 类型...)=>返回值
   */
  let c: (a: number, b: number) => number;
  c = function (n1: number, n2: number): number {
    return n1 + n2;
  };

  // string[] 字符换数组声明
  // number[] 数值数组
  let e: string[]
  // e = ['1', 2] // 报错
  // let f: number[]
  // Array<number>
  // Array<string>
  let f: Array<number>
  f = [1, 2, 3]
  // f = ['1', 2, 3, 4] // 报错

  /**
   * 元组就是固定长度的数组
   */
  let g: [string, string]
  g = ['1', '3']
  // g = ['1', '2', '3'] // 报错
  // g = ['1'] // 报错
  // g = [1, 2, 3] // 报错

  /**
   * enum 枚举
   *  需要先声明， 后使用
   */
  enum Gender {
    Male = 0,
    Female = 1
  }
  let i: {name: string, gander: Gender};
  i = {
    name: '孙悟空',
    gander: Gender.Male
  }
  console.log(i.gander === 0);
  /**
   * 类型别名
   * type 变量 = 类型
   */
  type myType = string
  let j: myType
}
