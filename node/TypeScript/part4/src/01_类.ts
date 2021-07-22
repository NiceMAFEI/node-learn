(function () {
  // 使用class定义
  /**
   * 类中主要包含了两个部分
   *      属性
   *      方法
   */
  class Person {
    // 定义  实例属性
    name: string = "孙悟空";
    age: number = 22;
    // readonly 为只读属性
    readonly gender: string = "男";
    // 在属性强使用static 关键字可以定义静态属性(类属性)
    // 可以直接使用类访问， Person.age
    static age: number = 18;

    // 定义方法
    // static 可以通过类去调用
    sayHello() {
      console.log("Hello");
    }
    static sayHello() {
      console.log("你好");
    }
  }

  const per = new Person();

  console.log(per);
  per.name = "tom";
  console.log(per);
  per.sayHello();
  console.log(Person.age);
  Person.sayHello();
})();
