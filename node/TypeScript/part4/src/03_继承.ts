(function () {
  class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    say() {
      console.log("我在叫");
    }
  }
  /**
   * 使用继承后，子类将会拥有父类所有的属性和方法
   *
   * 通过继承可以将多个类中共有的代码写在一个父类中
   *    如果希望在子类中添加新的属性和方法，可以直接添加
   */
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑`);
    }
    say() {
      console.log("汪汪汪");
    }
  }
  class Cat extends Animal {
    eat() {
      console.log(`${this.name}在吃东西`);
    }
    say() {
      console.log("喵喵喵");
    }
  }
  const dog = new Dog("旺财", 2);
  const cat = new Cat("咪咪", 1);
  console.log(dog);
  console.log(cat);

  dog.say();
  cat.say();
  dog.run();
  cat.eat();
})();
