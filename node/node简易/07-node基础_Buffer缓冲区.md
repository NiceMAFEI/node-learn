# Buffer(缓冲区)

## 描述

+ Buffer的结构和数组很像， 操作的方法也和数组类似
+ 数组中不能储存二进制的文件，而Buffer就是专门用来储存二进制数据的
+ 使用Buffer不需要引入模块， 直接使用即可
+ 在Buffer中储存的都是二进制数据，但在显示时间、都是以16进制的形式显示

## 重点

+ Buffer的大小一旦确定，则不能修改。
+ Buffer实际是对底层内存的直接操作
+ Buffer.from(str)  将一个字符串转换为buffer
+ Buffer.alloc(size) 创建一个指定大小的Buffer
+ Buffer.allocUnsafe(size)  创建一个指定大小的Buffer，可能包含敏感数据
+ .toString()  将缓冲区的数据转换为字符串

## 代码

```javascript
const str = 'Hello Node';
const buf = Buffer.from(str);
// 占用内存的大小
console.log(buf.length);
// 字符串的长度
console.log(str.length)
```

+ 创建一个指定大小的buffer

  + buffer构造函数都是不推荐使用的

    ```javascript
    const buf2 = new Buffer(10); // 10个字节的buffer
    ```

  + 其他方式， Buffer.alloc(size)

    ```javascript
    const buf2 = Buffer.alloc(10)
    ```

  + Buffer.allocUnsafe(size); 创建一个指定大小的Buffer, 但是Buffer中可能含有敏感的数据

    + ```javascript
      const buf3 = Buffer.allocUnsafe(10)
      ```

      性能更好，但会泄露数据



