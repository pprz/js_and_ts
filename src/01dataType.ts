// JavaScript 中有哪些基本数据类型（值类型）？
// 解答：  JavaScript 中的基本数据类型（值类型）包括：
// Number ：表示数字，包括整数和浮点数。
// String ：表示文本数据。
// Boolean ：表示逻辑值 true 或 false。
// Undefined ：表示未定义的值，通常是一个变量声明了但没有赋值。
// Null ：表示空值或无值。
// Symbol （ES6 引入）：表示唯一的、不可变的值，常用于对象属性的唯一标识符。
// BigInt （ES2020 引入）：表示任意大小的整数。
//  这些类型是按值传递的，意味着当你将一个值类型的变量赋值给另一个变量时，实际上是复制了该值。



// 什么是引用类型？JavaScript 中有哪些常见的引用类型？
// 解答：
// 引用类型 是指那些存储在堆内存中的复杂数据结构，变量中存储的是指向该数据结构的引用（内存地址），而不是数据本身。
// 常见的引用类型 ：
// Object ：表示键值对的集合。
// Array ：表示有序的数据集合。
// Function ：表示可执行的代码块。
// Date ：表示日期和时间。
// RegExp ：表示正则表达式。
//  引用类型是按引用传递的，意味着当你将一个引用类型的变量赋值给另一个变量时，实际上是复制了引用（内存地址），两个变量指向同一个对象。


let a = 10;
let b = a;
a = 20;

console.log(a); // 输出什么？
console.log(b); // 输出什么？

let obj1 = { name: "Alice" };
let obj2 = obj1;

obj1.name = "Bob";

console.log(obj1.name); // 输出什么？
console.log(obj2.name); // 输出什么？

// 如何判断一个变量是值类型还是引用类型？
console.log(typeof 10);         // "number"（值类型）
console.log(typeof "hello");    // "string"（值类型）
console.log(typeof true);       // "boolean"（值类型）
console.log(typeof {});         // "object"（引用类型）
console.log(typeof []);         // "object"（引用类型）
console.log(typeof function () { }); // "function"（引用类型）
console.log(Array.isArray([])); // 判断数组

//deepclone
const obj3 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'beijing'
    },
    arr: ['a', 'b', 'c']
}

const obj4 = deepClone(obj3)
obj4.address.city = 'shanghai'
obj4.arr[0] = 'a1'
console.log(obj3.address.city)
console.log(obj3.arr[0])

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
function deepClone<T>(obj: T): T {
    if (typeof obj !== 'object' || obj == null) {
        // obj 是 null ，或者不是对象和数组，直接返回
        return obj
    }

    // 初始化返回结果
    let result: any;
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            // 递归调用！！！
            result[key] = deepClone(obj[key])
        }
    }

    // 返回结果
    return result
}