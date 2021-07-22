/**
 * 使用工厂方法创建对象
 *  大批量创建对象
 * 使用工厂方法创建的对象，使用的构造函数都是Object
 *  导致我们无法区分多种不同类型的对象
 */
/**
 * 
 * @param { String } name 
 * @param { String } age 
 * @param { String } gender 
 * @returns obj
 */
function createPerson(name, age, gender) {
    var obj = new Object();
    // 姓名
    obj.name = name;
    // 年龄
    obj.age = age;
    // 性别
    obj.gender = gender
    // 方法
    obj.sayName = function (){
        console.log(this.name);
    }
    return obj
}
const obj1 = createPerson('person1', '18', '男')
const obj2 = createPerson('person2', '19', '男')
const obj3 = createPerson('person3', '20', '男')

console.log(obj1.sayName());
console.log(obj2.sayName());
console.log(obj3.sayName());