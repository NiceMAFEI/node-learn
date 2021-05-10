"use strict";
(function () {
    /**
     * 以abstract开头的类是抽象类，不能用来创建对象
     *  专门用被继承的类
     *      可以添加抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        say() {
            console.log("汪汪汪");
        }
    }
    const dog = new Dog("旺财");
    dog.say();
})();
