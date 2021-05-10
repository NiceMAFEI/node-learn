"use strict";
(function () {
    const obj1 = {
        name: "12321",
        age: 12,
    };
    const obj = {
        name: "sss",
        age: 12,
        gender: "男",
    };
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("你好");
        }
    }
    const obj2 = new MyClass('hahah');
    console.log(obj2);
})();
