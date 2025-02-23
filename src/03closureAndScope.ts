// 什么是作用域？JavaScript 中的作用域有哪些类型？
// 作用域 是指变量和函数在代码中的可访问范围。它决定了在程序的哪些部分可以访问某个变量或函数。



// JavaScript 中的作用域类型 ：
// 全局作用域（Global Scope） ：在全局作用域中声明的变量和函数可以在代码的任何地方访问。
// 函数作用域（Function Scope） ：在函数内部声明的变量只能在该函数内部访问，外部无法访问。
// 块级作用域（Block Scope） ：使用 let 和 const 声明的变量具有块级作用域，它们只能在声明它们的代码块（如 {} 内部）中访问。



// 什么是自由变量？如何与闭包相关联？
// 自由变量 是指在函数中使用的，但既不是函数的参数也不是函数内部定义的局部变量的变量。换句话说，自由变量是函数外部定义但在函数内部使用的变量。
// 闭包 是指一个函数能够记住并访问它的词法作用域，即使这个函数在其词法作用域之外执行。闭包通常会捕获自由变量。
function outer() {
    let a = 10; // 自由变量
    return function inner() {
        console.log(a); // inner 函数捕获了自由变量 a
    };
}

const closureFunc = outer();
closureFunc(); // 输出 10

//inner 函数是一个闭包，它捕获了 outer 函数中的自由变量 a，即使 outer 函数已经执行完毕，inner 函数仍然可以访问 a。

function create() {
    let x1 = 100;
    return function () {
        console.log(x1);
    }

}
const fn1 = create();
let x1 = 200;
fn1();

function print(fn: () => void) {
    const x2 = 200;
    fn();
}

const x2 = 100;
function fn() {
    console.log(x2);
}
print(fn);

// 自由变量的查找，实在函数定义的地方向上级作用域查找，不是在执行的地方。

// ---------------------------------------

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

//   输出：3 3 3
// 原因 ：由于 var 是函数作用域，循环中的 i 是共享的。当 setTimeout 回调执行时，循环已经结束，i 的值已经是 3。因此，所有的回调都输出 3。

// 使用 let 来声明 i，因为 let 具有块级作用域，每次循环都会创建一个新的 i

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// 什么是闭包？
function createCounter() {
    let count = 0; // 私有变量
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 输出 1
console.log(counter.decrement()); // 输出 0

//闭包在react中的应用
// 以下代码没配置react环境，无法执行，仅作参考
// import { useState, useEffect } from 'react';

// function useCounter(initialValue: number) {
//   const [count, setCount] = useState(initialValue);

//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);

//   return { count, increment, decrement };
// }

// // 在组件中使用
// function CounterComponent() {
//   const { count, increment } = useCounter(0);
//   return <button onClick={increment}>点击次数：{count}</button>;
// }

// 注意事项

// 内存泄漏：闭包可能长期引用变量，导致内存无法释放，需及时清理（如移除事件监听）。
// 类型注解：TypeScript 中需明确闭包内外部变量的类型，避免隐式 any。
// 性能优化：过度使用闭包可能影响性能（如高频触发的防抖函数）。

// 实现防抖与节流（Debounce & Throttle）


// this 的指向是如何确定的？
// this 的指向 是由函数的调用方式决定的，而不是由函数的定义位置决定的。常见的 this 指向规则如下：
// 普通函数调用 ：this 指向全局对象（浏览器中是 window，严格模式下是 undefined）。
// 方法调用 ：this 指向调用该方法的对象。
// 构造函数调用 ：this 指向新创建的实例对象。
// 箭头函数 ：箭头函数没有自己的 this，它会捕获定义时所在作用域的 this。

//哪些情况不能使用箭头函数？



