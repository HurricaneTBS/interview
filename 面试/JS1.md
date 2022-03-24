## 变量类型和计算

- `typeof` 能判断哪些类型
- 何时使用`===`何时使用`==`
- 只类型和引用类型的区别
- 手写深拷贝

### 变量类型

- 变量类型 VS 引用类型

值类型

```js
let a = 100;
let b = a;
a = 200;
console.log(b); // 100
```

常见值类型：

```js
let a; // undefined
const s = "abc";
const n = 100;
const b = true;
const s = Symbol("s");
```

引用类型：

```js
let a = { age: 20 };
let b = a;
b.age = 21;
console.log(a.age); // 21
```

常见的引用类型：

```js
const obj = { x: 100 };
const arr = [1, 2, 3];
const n = null; // 特殊引用类型，指针指向空地址
// 特殊引用类型，但不用于存储数据，所以没有“拷贝、复制函数”这一说
function fn() {}
```

- typeof 运算符
  作用：
  识别所有值类型
  识别函数
  判断是否是引用类型（不可再细分）

```js
// 判断所有的值类型
let a;
typeof a; // 'undefined'
const str = "abc";
typeof str; // 'string'
const n = 100;
typeof n; // 'number'
const b = true;
typeof b; // 'boolean'
const s = Symbol("s");
typeof s; // 'symbol'

// 判断函数
function fn() {}
typeof fn; // 'function'

// 识别引用类型（不能再继续识别）
typeof null; // 'object'
typeof [1, 2, 3]; // 'object'
typeof { x: 10 }; // 'object'
```

- 深拷贝

```js
const obj1 = {
  age: 20,
  name: "xxx",
  address: {
    city: "beijing",
  },
  arr: ["a", "b", "c"],
};

const obj2 = deepClone(obj1);
console.log(obj2);
obj2.address.city = "sdasda";
console.log(obj1.address.city);

function deepClone(obj = {}) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}
```
