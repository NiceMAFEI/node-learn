"use strict";
(function () {
    /**
     * 在定义函数，或者类时， 遇到类型不明确就可以使用泛型
     *
     */
    function fn(a) {
        return a;
    }
    //   直接调用，具有泛型的函数
    fn(10); // 不指定泛型
    fn("hello"); // 指定泛型
    function fn2(a, b) {
        return a;
    }
    fn2(123, "helllo");
    //   T extends Inter 便是泛型T必须是Inter的实现类
    function fn3(a) {
        return a.length;
    }
    const request = fn3("123");
    console.log(request);
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    ;
    const mc = new MyClass('哈哈哈');
})();
