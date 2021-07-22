(function () {
    /**
     * 以abstract开头的类是抽象类，不能用来创建对象
     *  专门用被继承的类
     *      可以添加抽象方法
     */
    abstract class Animal {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    //   抽象方法只能定义在抽象类中， 子类必须重写抽象方法
      abstract say(): void;
    }
    class Dog extends Animal {
      say() {
        console.log("汪汪汪");
      }
    }
    const dog = new Dog("旺财");
    dog.say()
  })();
  