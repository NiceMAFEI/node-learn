(function () {
  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    say() {
      console.log(`${this.name}在叫`);
    }
  }
  class Dog extends Animal {
    age: number;
    constructor(name: string, age: number) {
      // 如果在子类中，重写了构造函数，在子类构造函数中必须对父类的构造函数进行调用
      super(name);
      this.age = age;
    }
    say() {
      //   在类方法中  super就表示当前类的父类
      //   super.say();
      console.log("汪汪汪");
    }
  }
  const dog = new Dog("旺财", 2);
  console.log(dog);
  dog.say();
})();
