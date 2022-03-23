# .on()

## 基本使用

```js
$("p").on("click", function () {
  alert($(this).text());
});
```

> 点击 p 标签，触发后面的 function

## 链式选择

```js
$("table tbody").on("click", "tr", function (event) {
  alert($(this).text());
});
```

> 选中 table 中 tbody 中的 tr 标签，并添加点击事件

## 传递数据到处理程序

```js
function greet(event) {
  alert("Hello " + event.data.name);
}
$("button").on("click", { name: "Karl" }, greet);
$("button").on("click", { name: "Addy" }, greet);
```

> 比如greet方法是一个通用的方法，这时候可以给多个点击事件用的时候，可以考虑这种方式


