{
    let a =1;
    console.log(a);
}
console.log(a);

var a = 1;
var a = 2;
let b = 1;
let b = 2;      // Identifier 'b' has already been declared

console.log(c);
var c = 1;
console.log(d); // d is not defined
let d = 1;

{
    var e = 1;
}
console.log(e);
{
    let f = 2;
}
console.log(f); // f is not defined




//使用 `const` 用来声明常，其有以下特点：
//变量声明不会提前；
// 具有块级作用域；
// 值不可改变；
// 声明时需同时赋值。

const a = 1;
a = 2;              // Assignment to constant variable

const obj = {name : 'xx', age : 11};
obj.name = 'yy';
console.log(obj);   

const b;
b = 2;              // Assignment to constant variable