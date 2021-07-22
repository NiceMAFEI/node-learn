(function () {
  // 表示人的类
  /**
   * 现在属性实在对象中设置，属性可以被任意修改
   *    安全性不高
   */
  class Person {
      /**
       * TS可以在属性前添加属性的修饰符
       *    -public   公共的  可以在任意位置访问(修改)  默认值
       *    -private  私  有  只能在类的内部进行访问(修改)
       *                通过在类中添加方法，使外部可以访问
       */
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
    // // 定义一个获取name的方法
    // getName(): string {
    //     return this._name
    // };
    // // 设置
    // setName(value: string): void {
    //     this._name = value
    // }
    get name() {
        return this._name
    };
    set name(value: string) {
        this._name = value
    };
    get age() {
        return this._age
    };
    set age(value: number) {
        if(value >= 0) {
            this._age = value
        }
    }
  }
  const per = new Person("123", 2);
  console.log(per);
  console.log(per.name);
  per.name = 'hahaha'
  console.log(per.name);
  per.age = -10;
  console.log(per.age);
  
  
})();
