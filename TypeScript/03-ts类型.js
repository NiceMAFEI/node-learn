{
    /**
     * object 表示一个js对象
     *  一般不使用, 属性名后面加?表示属性是可选的
     */
    var a = void 0;
    a = {
        name: "123"
    };
    // [propName: string]: any 表示任意类型的属性
    var b = void 0;
    b = {
        name: "12331",
        age: 123,
        gender: "123312"
    };
    // c 申明为函数， 接受两个number 类型参数，返回Number
    /**
     * 类似于箭头函数的形式的类型声明：
     *  语法：
     *    (形参: 类型, 形参: 类型...)=>返回值
     */
    var c = void 0;
    c = function (n1, n2) {
        return n1 + n2;
    };
    // string[] 字符换数组声明
    // number[] 数值数组
    var e = void 0;
    // e = ['1', 2] // 报错
    // let f: number[]
    // Array<number>
    // Array<string>
    var f = void 0;
    f = [1, 2, 3];
    // f = ['1', 2, 3, 4] // 报错
    /**
     * 元组就是固定长度的数组
     */
    var g = void 0;
    g = ['1', '3'];
    // g = ['1', '2', '3'] // 报错
    // g = ['1'] // 报错
    // g = [1, 2, 3] // 报错
    /**
     * enum 枚举
     *
     */
    var Gender = void 0;
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
    })(Gender || (Gender = {}));
    var i = void 0;
    i = {
        name: '孙悟空',
        gander: Gender.Male
    };
    console.log(i.gander === 0);
}
