// 什么是原型（Prototype）？
// 在 JavaScript 中，每个函数都有一个 prototype 属性，这个属性是一个对象，包含了可以被该函数的所有实例共享的属性和方法。
// 当我们使用构造函数创建一个对象时，新创建的对象会有一个内部属性 [[Prototype]]（通常可以通过 __proto__ 访问），它指向构造函数的 prototype 对象。

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("Alice");
person.sayHello(); // 输出 "Hello, my name is Alice"

//如何实现继承？
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name); // 调用父类的构造函数
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex", "Labrador");
dog.speak(); // 输出 "Rex barks."


// 静态方法 
class MathUtils {
    static add(a: number, b: number) {
        return a + b;
    }
}

console.log(MathUtils.add(2, 3)); // 输出 5


//  如何检查一个对象是否是某个类的实例？
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true

// 隐式原型 _proto_ 显示原型prototype
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log((person as any).__proto__ === Person.prototype); // true 对象的隐式原型指向对象的显示原型