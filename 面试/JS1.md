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
  if (typeof obj !== "object" || obj == null) {
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

## 变量计算-类型转换

- 字符串拼接

```js
const a = 100 + 10; // 110 没转换
const b = 100 + "10"; // 10010  转换了
const c = true + "10"; // 'true10'  转换了
```

- ==

```js
100 == "100"; // true
0 == ""; // true
0 == false; // true
false == ""; // true
null == undefined; // true
```

== 会将`''`、`0`等转换为`false`

```js
//  除了==null之外，其他一律都用===，例如：
const obj = { x: 100 };
if (obj.a == null) {
}
// 相当于
// if(obj.a === null || obj.a === undefined){}
```

- if 语句和逻辑运算

truly 变量：!!a === true 的变量
falsely 变量：!!a === false 的变量

就是经过两步非运算，得到的布尔值。

```js
// 以下变量是falsely变量，除此以外都是truly变量
!!0 === false;
!!NaN === false;
!!"" === false;
!!null === false;
!!undefined === false;
!!false === false;
```

if 语句判断的就是 truly 或者 falsely 变量

```js
// truly变量
const a = true;
if (a) {
}
const b = 100;
if (b) {
}

// falsely变量
const c = "";
if (c) {
}
const d = null;
if (d) {
}
let e;
if (e) {
}
```

### 逻辑判断

```js
/**
 * 第一个是truely变量，就会去执行&&后的操作，第一个是falsely变量，就会直接返回falsely变量
 * 真？往后走，真？往后走哦
*/
console.log(10 && 0); // 0 
/**
 * 假？往后走，假？往后走
*/
console.log("" || "abc"); // 'abc'
console.log(!window.abc); // true
```
