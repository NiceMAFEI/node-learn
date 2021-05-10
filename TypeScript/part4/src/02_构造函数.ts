(function () {
  class Dog {
    /**
     * 构造函数 constructor
     * 构造函数会在对象创建时调用
     */
    name: string;
    age: number;
    constructor(name: string, age: number) {
      // 在实例方法中， this表示当前实例
      // 在构造函数中， 当前对象就是当前创建的那个对象
      // 可以通过this向新建的对象中添加属性
      // console.log(this);
      this.name = name;
      this.age = age;
    }
    bark() {
      console.log("汪汪汪");
      // 在方法中可以通过this来表示当前调用的方法对象
      console.log(this);
    }
  }
  const dog1 = new Dog("小黑", 1);
  const dog2 = new Dog("小白", 2);
  console.log(dog1);
  console.log(dog2);
  dog1.bark();
})();
