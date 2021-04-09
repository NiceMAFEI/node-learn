import { hi } from './m1'
console.log('Hello tsWebpack');
function sum(a: number, b: number): number {
    return a + b
}
console.log(sum(10, 20));
console.log('hello');
console.log(hi);
const obj = {
    name: '孙悟空',
    age: 33
};
console.log(obj);
obj.age = 18;
// console.log(Promise);

let fun = (a: number, b:number): number => {
    return a + b
}
fun(110, 20)
console.log(fun(110, 20));




