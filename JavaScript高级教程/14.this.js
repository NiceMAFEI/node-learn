/**
 * 解析器在调用函数时，每次都会向函数内部传递一个隐含的参数，
 *  this, this指向的是一个对象
 *  这个对象我们称为函数执行的上下文对象
 *  根据函数的调用方式的不同，this会指向不同的对象
 *      谁调用，指向谁
 *
 */
var name = 'window'
fun();
var obj1 = {
  name: "hahah",
  sayName: fun,
};
var obj2 = {
  name: "xixixix",
  sayName: fun,
};
function fun() {
  console.log(this.name);
}
obj1.sayName();
obj2.sayName();

/**
 * node中10行和浏览器中的10行，结果不同
 */