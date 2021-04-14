(function () {
  type myType = {
    name: string;
    age: number;
    [propname: string]: any;
  };

  /**
   * 接口是用来限制一个类的结构
   *  接口可以重复定义;
   *  接口只定义结构，不考虑实际值
   *      接口中所有的方法都是抽象方法
   */
  interface myInterface {
    name: string;
    age: number;
  }
  interface myInterface {
    gender: string;
  }
  const obj1: myType = {
    name: "12321",
    age: 12,
  };
  const obj: myInterface = {
    name: "sss",
    age: 12,
    gender: "男",
  };
  interface myInter {
    name: string;
    sayHello(): void;
  }
  class MyClass implements myInter {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(): void {
      console.log("你好");
    }
  }
  const obj2 = new MyClass('hahah');
  console.log(obj2);
  
})();
