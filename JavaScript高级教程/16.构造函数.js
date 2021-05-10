/**
 * 创建一个构造函数， 专门来创建person 对象
 *  构造函数就是一个普通的函数，创建方式和普通函数没有区别
 *  习惯首字母大写
 * 
 * 构造函数和普通函数的区别就是调用方式不同
 *  构造函数需要new关键字
 */
function Person(name, age, gender) {
    console.log(this);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = function () {
        console.log(this.name);
    }
}

/**
 * 构造函数的执行流程
 *  1、立刻创建一个新的对象
 *  2、将新建的对象设置为函数中的this，在构造函数中可以用this来引用新建的对象
 *  3、逐行执行函数中的代码
 *  4、将新建的对象作为返回值返回
 * 
 * 使用同一个构造函数创建的对象称为一类，也将一个构造函数称为一个类
 *  我们将通过一个构造函数创建的对象，称为是该对象的实例
 */
var per = new Person('per', 16, '女')
var per2 = new Person('per1', 18, 'nan')
var per3 = new Person('per2', 19, '女')
console.log(per);
console.log(per2);
console.log(per3);
console.log(per instanceof Object);