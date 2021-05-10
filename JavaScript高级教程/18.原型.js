/**
 * 创建一个构造函数
 */

function MyClass() {

}
MyClass.prototype.name = '原型名';
const mc = new MyClass()
console.log('name' in mc);
console.log(mc.hasOwnProperty('name'));
console.log(mc.hasOwnProperty('hasOwnProperty'));
console.log(mc.__proto__.hasOwnProperty('hasOwnProperty'));
/**
 * 原型对象也是对象，也有原型
 *  当我们使用一个对象的属性或方法时，会在自身中寻找
 *      有-->使用
 *      无-->原型中寻找
 *          有-->使用
 *          无-->原型的原型中寻找
 *      ......
 *      直到找到 Object对象的原型
 *      Object对象的原型没有原型，没有返回undefined
 * 
 *  原型链
 */
console.log(mc.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));