"use strict";
(function () {
    // 使用class定义
    /**
     * 类中主要包含了两个部分
     *      属性
     *      方法
     */
    class Person {
        constructor() {
            // 定义  实例属性
            this.name = "孙悟空";
            this.age = 22;
            // readonly 为只读属性
            this.gender = "男";
        }
        // 定义方法
        // static 可以通过类去调用
        sayHello() {
            console.log("Hello");
        }
        static sayHello() {
            console.log("你好");
        }
    }
    // 在属性强使用static 关键字可以定义静态属性(类属性)
    // 可以直接使用类访问， Person.age
    Person.age = 18;
    const per = new Person();
    console.log(per);
    per.name = "tom";
    console.log(per);
    per.sayHello();
    console.log(Person.age);
    Person.sayHello();
})();
