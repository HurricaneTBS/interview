## class 和继承

### class

类似一个模版，可以通过这个模版构建一些东西。

- constructor
- 属性
- 方法

```js
class People {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} eat something`);
  }
}

class Student extends People {
  constructor(name, number) {
    super(name);
    this.number = number;
  }

  sayHi() {
    console.log(`姓名：${this.name}---学号：%`);
  }
}

class Teacher extends People {
  constructor(name, major) {
    super(name);
    this.major = major;
  }

  teach() {
    console.log(`${this.name} 教授 ${this.major}`);
  }
}

const wangLaoshi = new Teacher("王老师", "语文");

wangLaoshi.teach();
wangLaoshi.eat();
```

## 类型判断 instanceof

```js
xialuo instanceof Student // true
xialuo instanceof People // true
xialuo instanceof Object // true

[] instanceof Array // true
[] instanceof Object // true

{} instanceof Object // true
```

## 原型

```js
// class 实际上是函数，可见是语法糖
typeof People; // 'function'
typeof Student; // 'function'

// 隐式原型和显示原型
console.log(xialuo.__prpto__);
console.log(Student.prototype);
console.log(xialuo.__proto__ === Student.prototype); // true
```

原型关系

- 每个 class 都有一个显示原型
- 每个实例都有隐式原型`__proto__`
- 实例的`__proto__`指向对应的 class 的 prototype

基于原型的执行规则

- 获取属性 xialuo.name 或执行方法 xialuo.sayHi()时
- 先在自身属性和方法寻找
- 如果找不到则自动去**proto**中查找

## 原型链

```js
console.log(Student.prototype.__proto__);
console.log(People.prototype);
console.log(People.prototype === Student.prototype.__proto__);
```

## 题目

### 如何准确判断一个变量是不是数组？

```js
a instanceof Array;
```

### 手写一个简单的 jQuery，考虑插件和扩展性

```js
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;

    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }

    this.length = length;
    this.selector = selector;
  }

  get(index) {
    return this[index];
  }

  each(fn) {
    for (let i = 0; i, this.length; i++) {
      const el = this[i];
      fn(el);
    }
  }

  on(type, fn) {
    return this.each((el) => {
      el.addEventListener(type, fn, false);
    });
  }
}
```

考虑插件扩展性

```js
// 插件机制
jQuery.prototype.dialog = function (info) {
  alert(info);
};

// 复写机制 ---造轮子
class MyjQuery extends jQuery {
  constructor(selector) {
    super(selector);
  }

  // 扩展自己的方法
  addClass(className) {}

  style(data) {}
}
```

### class 的原型本质，怎么理解？

- 原型和原型链的图示
- 属性和方法的执行规则
