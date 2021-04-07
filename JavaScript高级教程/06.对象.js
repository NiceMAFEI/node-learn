/**
 *  JS中的数据类型：
 *    五种基本类型：
 *      -String
 *      -Number
 *      -Boolean
 *      -Null
 *      -Undefined
 *    引用类型：
 *      -Object: 对象
 *      -对象的分类：
 *          1:内建对象
 *              -由ES标准中定义的对象，在任何的ES的实现中都可以使用
 *              -比如: Math, String, Number, Boolean, Function, Object
 *          2:宿主对象
 *              -由JS的运行环境提供的对象，目前来讲主要是由浏览器提供的对象
 *              -比如: BOM, DOM
 *          3:自建对象
 *              -由开发人员自己创建的对象
 * 
 */
// 创建对象
/**
 * 使用new关键字调用的函数，是构造函数constructor
 *  构造函数是专门用来创建对象的函数
 */
let obj = new Object();
obj.name = 'hello';
obj.age = '18'
// let obj = {}
/**
 * 删除对象属性
 *  delete 对象.属性名
 */
delete obj.name

/**
 * 如果需要特殊的属性名，不能采用.的方式操作
 *  需要使用另一种方式：
 *      语法：对象["属性名"] = 属性值
 *  读取时也需要采用这种方式
 */
obj["name"] = 'zhiou'
obj["123"] = 18
console.log(obj);
console.log(obj["123"]);
/**
 * 使用[]这种形式去操作属性，更加灵活
 *  在[]中可以直接传递一个变量，这样变量值是多少就会读取那个属性
 */
const a = 123;
console.log(obj[a]);
// 也可以添加函数
obj.sayName = function() {
  console.log(obj.name);
}
obj.sayName()