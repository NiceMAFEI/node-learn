# 文件系统(File System)

## 基本

+ 服务器的本质就是将本地的文件送给远程的客户端

+ Node通过fs模块来和文件系统进行交互

+ 该模块提供了一些标准文件访问API来打开、读取、写入文件，以及与其交互

+ 使用前，先加载

  + ```javascript
    const fs = require("fs")
    ```

## 同步和异步调用

+ fs模块中所有的操作都有两种： 同步和异步
+ 同步文件系统会**阻塞**程序的执行， 也就是除非操作完毕， 否则不会向下执行代码
+ 异步文件系统**不会阻塞**程序的执行， 而是在操作完成时， 通过回调函数将结果返回

## 文件的写入和读取

+ 打开文件

  + ```javascript
    /**
    *@param { String }path, 要打开文件的路径
    *@param {  }flags, 操作，r只读；w可写的
    */
    fs.openSync(path, flags[, mode]);
    ```

    

+ 写文件

  + ```javascript
    fs.writeSync(fd, string[, position[, encoding]])
    // fs 文件描述符， 需要传入要写入的文件描述符
    // string 要写入的内容
    ```

+ 关闭文件

  + ```javascript
    fs.closeSync(fd)
    // fd 要关闭文件的描述符
    ```

    