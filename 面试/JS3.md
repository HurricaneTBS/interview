## 作用域和闭包

### 作用域和自由变量

```js
let a = 0;
function fn1() {
  let a1 = 100;

  function fn2() {
    let a2 = 200;

    function fn3() {
      let a3 = 300;
      return a + a1 + a2 + a3;
    }

    fn3();
  }

  fn2();
}

fn1();
```

- 全局作用域
- 函数作用域
- 块级作用域

```js
// ES6块级作用域
if (true) {
  let x = 100;
}
console.log(x); // 报错
```

> 只在花括号内有效

自由变量

- 一个变量在当前作用域没有定义，但被使用了
- 向上级作用域，一层一层依次寻找，直到找到为止
- 如果到了全局作用域，还是没有找到，会报错 xxx is not defined

### 闭包

- 作用域应用的特殊情况，有两种表现：
  - 函数作为参数被传递
  - 函数作为返回值被返回

```js
// 函数作为返回值
function create() {
  let a = 100;
  return function () {
    console.log(a);
  };
}

let fn = create();
let a = 200;
fn(); // 100

// 函数作为参数
function print(fn) {
  let a = 200;
  fn();
}

let a = 100;
function fn() {
  console.log(a);
}

print(fn); // 100
```

**闭包自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方。**

### this

- 作为普通函数
- 使用 call、apply、bind
- 作为对象方法调用
- 在 class 方法中调用
- 箭头函数

**this 在各个场景中，取什么值，是在函数执行的时候确定的，不是在定义的地方确定的。**

```js
function fn1() {
  console.log(this);
}

fn1(); // window  在执行的地方，this就是window

// call会直接执行
fn1.call({ x: 100 }); // {x:100}

// bind返回一个新的函数去执行
const fn2 = fn1.bind({ x: 200 });
fn2(); // {x:200}

const zhangsan = {
  name: "张三",
  sayHi() {
    // this 即当前对象
    console.log(this);
  },
  wait() {
    setTimeout(function () {
      // this === window
      console.log(this);
    }, 2000);
  },
};

const zhangsan = {
  name: "张三",
  sayHi() {
    // this 即当前对象
    console.log(this);
  },
  wait() {
    setTimeout(() => {
      // this 即当前对象 箭头函数的this取上一级作用域的this
      console.log(this);
    }, 2000);
  },
};

class People {
  constructor(name) {
    this.name = name;
    this.age = 20;
  }

  sayHi() {
    // Zhangsan 这个实例
    console.log(this);
  }
}

const zhangsan = new People("张三");
zhangsan.sayHi();
```

## 题目

### this 的不同应用场景，如何取值

### 手写 bind 函数

```js
// 模拟 bind
Function.prototype.bind1 = function () {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments);

  // 获取 this（数组第一项）
  const t = args.shift();

  // fn1.bind(...) 中的 fn1
  const self = this;

  // 返回一个函数
  return function () {
    return self.apply(t, args);
  };
};

function fn1(a, b, c) {
  console.log("this", this);
  console.log(a, b, c);
  return "this is fn1";
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
const res = fn2();
console.log(res);
```

### 实际开发中闭包的应用场景，举例说明

- 隐藏数据
- 如做一个简单的 cache 工具

```js
// 闭包隐藏数据，只提供api
function createCache() {
  const data = {}; // 闭包中的数据被隐藏，不被外界访问
  return {
    set: function (key, value) {
      data[key] = value;
    },
    get: function (key) {
      return data[key];
    },
  };
}

const c = createCache();
c.set("a", 100);
console.log(c.get("a"));
```
