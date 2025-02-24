// 什么是 Promise？它的三种状态是什么？
// Promise 是 JavaScript 中用于处理异步操作的对象。它代表了一个最终可能完成或失败的操作，并且可以链式调用 .then() 和 .catch() 来处理结果。
// Promise 的三种状态 ：
// Pending（进行中） ：初始状态，表示操作尚未完成。
// Fulfilled（已成功） ：表示操作成功完成。
// Rejected（已失败） ：表示操作失败。
//  状态转换 ：
// 从 Pending 到 Fulfilled 或 Rejected 是不可逆的，一旦状态改变，就不会再变

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
        // reject("Error!");
    }, 1000);
});

promise
    .then(result => console.log(result)) // 输出 "Success!"
    .catch(error => console.error(error));

//  Event Loop 是什么？它是如何工作的？
// Event Loop 是 JavaScript 的核心机制之一，用于处理异步任务和事件。JavaScript 是单线程的，但通过 Event Loop，它可以处理异步操作而不阻塞主线程。
// 工作流程 ：
// Call Stack（调用栈） ：同步代码会直接进入调用栈并执行。
// Web APIs ：异步任务（如 setTimeout、fetch 等）会被交给浏览器的 Web APIs 处理。
// Task Queue（任务队列） ：当异步任务完成后，它们会被放入任务队列（分为 宏任务队列 和 微任务队列 ）。
// Event Loop ：Event Loop 不断检查调用栈是否为空。如果为空，则从任务队列中取出任务并推入调用栈执行。
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
// console.log("Start") 和 console.log("End") 是同步代码，先执行。Promise 是微任务，优先于宏任务 setTimeout，因此先输出 "Promise"，再输出 "Timeout"。

// DOM 事件与 Event Loop 的关系是什么？
// DOM 事件 （如点击事件、键盘事件等）是异步任务的一部分，它们通过 Event Loop 来处理。
// 当用户触发一个 DOM 事件时，事件处理器会被注册到 宏任务队列 中，等待调用栈清空后由 Event Loop 执行。
console.log("Start");
// 为方便理解可注释掉其他代码，只保留46～54行，点击页面任意区域查看执行顺序
document.addEventListener("click", () => {
    console.log("Click event");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");
// setTimeout 是宏任务，优先于用户触发的 DOM 事件。因此，只有在 setTimeout 执行完毕后，才会处理 DOM 事件。


// Promise 的 then 和 catch 如何影响状态？
// then ：用于处理 Promise 成功（Fulfilled）的结果。如果 then 返回一个新的值或 Promise，后续的 then 会基于这个新的值继续执行。
// catch ：用于处理 Promise 失败（Rejected）的结果。如果 catch 捕获了错误并返回一个新的值或 Promise，后续的 then 会基于这个新的值继续执行。
const promise2 = new Promise((resolve, reject) => {
    reject("promise2 Error!");
});

promise2
    .then(result => {
        console.log("promise2 Success:", result);
    })
    .catch(error => {
        console.log("promise2 Caught Error:", error);
        return "Recovered";
    })
    .then(result => {
        console.log("promise2 After Catch:", result);
    });
//catch 捕获了错误并返回了 "Recovered"，因此后续的 then 可以继续执行。

// 面试题 5: async/await 是什么？它与 Promise 的关系是什么？
// async/await 是基于 Promise 的语法糖，用于简化异步代码的编写。async 函数总是返回一个 Promise，而 await 用于等待一个 Promise 完成。
// 关系 ：
// async/await 是 Promise 的语法糖，底层仍然是基于 Promise 的。
// await 会暂停 async 函数的执行，直到 Promise 完成（Fulfilled 或 Rejected）。

//因为API不存在无法执行，理解async/await与Promise的关系即可
// async function fetchData() {
//     try {
//       const response = await fetch("https://api.example.com/data");
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   fetchData(); // await 会等待 fetch 和 response.json() 完成，避免了嵌套的 .then() 调用。


// 宏任务与微任务的区别是什么？
// 宏任务（Macro Task） ：
// 包括：setTimeout、setInterval、setImmediate（Node.js）、DOM 渲染等。
// 宏任务会在当前调用栈清空后执行。
//  微任务（Micro Task） ：
// 包括：Promise.then/catch/finally、MutationObserver、queueMicrotask 等。
// 微任务会在当前宏任务结束后立即执行，优先于下一个宏任务。
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
// Promise 是微任务，优先于宏任务 setTimeout，因此先输出 "Promise"，再输出 "Timeout"。

// Promise常用API

// Promise.all()
// 作用 ：接收一个 Promise 数组，等待所有 Promise 都成功后返回结果数组；如果有一个 Promise 失败，则立即返回失败。
// 使用场景 ：并行执行多个异步任务，并在所有任务完成后统一处理结果
const promiseA = Promise.resolve(1);
const promiseB = Promise.resolve(2);
const promiseC = Promise.resolve(3);

Promise.all([promiseA, promiseB, promiseC])
    .then(results => {
        console.log(results); // 输出: [1, 2, 3]
    })
    .catch(error => {
        console.error(error);
    });
// 如果其中一个 Promise 被拒绝，整个 Promise.all 会立即失败。

const promiseA1 = Promise.resolve(1);
const promiseB1 = Promise.reject("Error in promiseB1");
const promiseC1 = Promise.resolve(3);

Promise.all([promiseA1, promiseB1, promiseC1])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error); // 输出: Error in promiseB1
    });


// Promise.allSettled()
// 作用 ：接收一个 Promise 数组，等待所有 Promise 完成（无论成功还是失败），并返回每个 Promise 的最终状态和结果。
// 使用场景 ：需要知道每个 Promise 的完成状态，而不管它们是否成功。
const pro1 = Promise.resolve(1);
const pro2 = Promise.reject("Error in pro2");
const pro3 = Promise.resolve(3);

Promise.allSettled([pro1, pro2, pro3])
    .then(results => {
        console.log(results);
    });
/*
    输出:
    [
    { status: 'fulfilled', value: 1 },
    { status: 'rejected', reason: 'Error in promise2' },
    { status: 'fulfilled', value: 3 }
    ]
*/

// Promise.race()
// 作用 ：接收一个 Promise 数组，等待任意一个 Promise 完成（无论成功还是失败），并返回其最终状态和结果。
// 使用场景 ：需要知道哪个 Promise 最先完成，而不管它是否成功。
const proA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("proA");
    }, 1000);
});

const proB = new Promise((resolve, reject) => { })
Promise.race([proA, proB])
    .then(result => {
        console.log(result);
    });

// Promise.any()
// 作用 ：接收一个 Promise 数组，返回第一个成功（Fulfilled）的 Promise 的结果；如果所有 Promise 都失败，则返回一个失败的 Promise。
// 使用场景 ：需要获取第一个成功的任务结果，忽略其他失败的任务。
const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.resolve("Success 3");

Promise.any([p1, p2, p3])
    .then(result => {
        console.log(result); // 输出: Success 2
    })
    .catch(error => {
        console.error(error);
    });
// 如果所有 Promise 都失败，Promise.any 会抛出一个 AggregateError。

// Promise.prototype.finally()
// 作用 ：无论 Promise 成功还是失败，都会执行 finally 中的回调函数。
// 使用场景 ：用于清理工作，例如关闭加载动画、释放资源等。

const pA = Promise.resolve(42);

pA
    .then(result => {
        console.log(result); // 输出: 42
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Finally block executed"); // 输出: Finally block executed
    });


// yield
// 什么是生成器函数yield？
// 生成器函数 是一种特殊的函数，使用 function* 定义。
// 它可以暂停执行并返回一个值，稍后可以从暂停的地方继续执行。
// 调用生成器函数不会立即执行函数体，而是返回一个 生成器对象（Generator Object） ，该对象实现了 迭代器协议 。
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generatorFunction();
console.log(generator.next().value); // 输出: 1
console.log(generator.next().value); // 输出: 2
console.log(generator.next().value); // 输出: 3

// 常用场景
// 实现迭代器 ：轻松创建可迭代对象。
// 异步编程 ：早期用于模拟 async/await。
// 惰性求值 ：处理大数据集或无限序列。
// 控制流管理 ：实现状态机、任务调度等。
// 数据流处理 ：逐行读取文件或处理网络请求。
// 尽管现代 JavaScript 提供了更简洁的工具（如 async/await），但backstage的某些场景中推荐使用yield，我们项目code base里也有相关代码，了解即可。