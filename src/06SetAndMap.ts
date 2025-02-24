// Set 数据结构

// Set 是一种集合数据结构，类似于数组，但它的成员是唯一的（即不允许重复的值）。
// 特点 ：
// 存储的是唯一值，重复的值会被自动忽略。
// 可以存储任何类型的值（包括对象、函数等）。
// 基于哈希表实现，查找和删除操作的时间复杂度为 O(1)。
//  常用 API
// 创建一个 Set
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set); // 输出: Set { 1, 2, 3 }

const set1 = new Set();
set1.add(1).add(2).add(3);
console.log(set1); // 输出: Set { 1, 2, 3 }

const set2 = new Set([1, 2, 3]);
console.log(set2.has(2)); // 输出: true
console.log(set2.has(4)); // 输出: false


const set3 = new Set([1, 2, 3]);
set3.clear();
console.log(set3); // 输出: Set {}

const set4 = new Set([1, 2, 3]);
console.log(set4.size); // 输出: 3


const set5 = new Set([1, 2, 3]);
set5.forEach(value => console.log(value));
// 输出:
// 1
// 2
// 3

const set6 = new Set([1, 2, 3]);
for (let value of set6) {
    console.log(value);
}
// 输出:
// 1
// 2
// 3

const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // 输出: [1, 2, 3, 4]

//  Map 数据结构
// 介绍
// Map 是一种键值对集合，类似于对象，但它的键可以是任意类型（包括对象、函数等），而不仅仅是字符串。
// 特点 ：
// 键值对的键可以是任意类型。
// 插入顺序会被保留。
// 提供了丰富的 API 来操作键值对。
const map = new Map();
map.set('name', 'Bob');
map.set('age', 25);
console.log(map); // 输出: Map { 'name' => 'Bob', 'age' => 25 }

const map2 = new Map();
map2.set('name', 'Bob').set('age', 25);
console.log(map2); // 输出: Map { 'name' => 'Bob', 'age' => 25 }

const map3 = new Map();
map3.set('name', 'Bob');
console.log(map3.get('name')); // 输出: Bob
console.log(map3.get('age'));  // 输出: undefined

const map4 = new Map();
map4.set('name', 'Bob');
console.log(map4.has('name')); // 输出: true
console.log(map4.has('age'));  // 输出: false

const map5 = new Map();
map5.set('name', 'Bob');
map5.set('age', 25);
map5.delete('age');
console.log(map5); // 输出: Map { 'name' => 'Bob' }

const map6 = new Map();
map6.set('name', 'Bob');
map6.set('age', 25);
map6.clear();
console.log(map6); // 输出: Map {}

const map7 = new Map();
map7.set('name', 'Bob');
map7.set('age', 25);
console.log(map7.size); // 输出: 2

const map8 = new Map();
map8.set('name', 'Bob');
map8.set('age', 25);

map8.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// 输出:
// name: Bob
// age: 25

const map9 = new Map();
map9.set('name', 'Alice');
map9.set('age', 25);

for (let [key, value] of map9) {
    console.log(`${key}: ${value}`);
}
// 输出:
// name: Alice
// age: 25

const mapA = new Map();
const objKey = { id: 1 };
mapA.set(objKey, 'Bob');

console.log(mapA.get(objKey)); // 输出: Bob

const mapB = new Map();
mapB.set('name', 'Bob');
mapB.set('age', 25);

const arr1 = Array.from(map);
console.log(arr1);
// 输出: [ ['name', 'Bob'], ['age', 25] ]

// 另有两个弱引用的数据结构，不常用，了解即可
// WeakSet ：
// 只能存储对象。
// 对象是弱引用的，垃圾回收器会自动回收没有其他引用的对象。
// 不可迭代，无法直接获取成员。
//  WeakMap ：
// 键必须是对象，值可以是任意类型。
// 键是弱引用的，垃圾回收器会自动回收没有其他引用的键及其对应的值。
// 不可迭代，无法直接获取键。
//  这两个数据结构非常适合用于需要弱引用的场景，例如缓存、私有属性管理等。由于它们不会阻止垃圾回收，因此可以帮助开发者更好地管理内存，避免内存泄漏。