/**
 * 函数
 *  - 函数也是一个对象
 *  - 函数中可以封装一些功能(代码)， 在需要时可以执行这些功能(代码)
 *  - 在需要的时候调用函数
 */
console.log('1');
console.log('2');
console.log('3');
// 创建一个函数对象
const fun = new Function();
// 可以将要封装的代码，以字符串的形式传递给构造函数
const fun1 = new Function("console.log('这是第一个构造函数')")
// 封装到函数里的代码不会立即执行
// 函数中的代码会在函数调用时，执行
// 调用函数 语法 函数对象()
// 这种方式不好
fun1()
fun1()
/**
 * 使用函数声明，来创建一个函数
 *  语法：
 *    function 函数名([形参1, 形参2, ...形参n]) {
 *      语句
 *    }
 */
function fun2() {
  console.log('这是函数声明');
}
fun2();
/**
 * 匿名函数
 */
const fun3 = function() {
  console.log('我是匿名函数');
}
fun3()