/**
 * 立即执行函数
 *  函数定义完，立即执行且只执行一次
 */
// (function() {
//   console.log('我是一个匿名函数！！！！');
// })()
(function(a, b) {
  console.log('a='+a);
  console.log('b='+b);
})(123, 123)