# 模块化详解

## 每一个.js文件都是会被添加以下代码：

```javascript
function (exports, require, module, __filename, __dirname) {}
```

+ exports
  + 该对象用来将变量或函数暴露到外部
+ require
  + 函数， 用来引入外部的模块
+ module
  + 代表的是当前模块的本身
  + exports就是module的属性
  + 既可以exports导出， 也可以module.exports导出
+ __filename
  + 当前模块的完整路径
+ __dirname
  + 当前模块所在文件夹的完整路径

## exports和module.exports的区别

+ 本质上是一个对象
+ 通过exports只能使用 . 的方式来向外暴露内部变量
+ 而module.exports既可以通过 .  的形式， 也可以直接赋值来向外暴露内部变量

本质是引用类型的原因

```node.js
module.exports.xxx = xxx
module.exports = {
	xxx: xxx
}
```

