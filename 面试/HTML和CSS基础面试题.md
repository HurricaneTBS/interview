## 如何理解 HTML 语义化

- 让人更容易读懂（增加代码的可读性）
- 让搜索引擎更容易读懂（SEO 搜索引擎优化）

## 块级元素/內联元素（/空元素）有哪些？

块元素：`display:block/table` 的元素，有 `h1-6`、`div`、`ul`、`ol`、`li`、`dt`、`dd`、`table`、`form`、`blockquote`、`iframe`、`address`、`aside`、`section`、`header`、`main`、`nav`

內联元素：`display:inline/inline-block` 的元素，有 `span`、`img`、`input`、`button` 等

## margin 负值问题

- margin-top 和 margin-left 负值，元素向上、向左移动
- margin-right 负值，右侧元素左移，自身不受影响
- margin-bottom 负值，下方元素上移，自身不受影响

## BFC 理解和应用

- Block format context，块级格式化上下文
- 一块独立渲染区域，内部元素的渲染不回影响边界以外的元素

形成 BFC 常见的条件：

1. float 不是 none
2. position 是 absolute 或 fixed
3. overflow 不是 visible
4. display 是 flex inline-block 等

BFC 常见的应用：
清除浮动

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style type="text/css">
      .container {
        background-color: #f1f1f1;
      }
      .left {
        float: left;
      }
      .bfc {
        overflow: hidden; /* 触发元素 BFC */
      }
    </style>
  </head>
  <body>
    <div class="container bfc">
      <img src="https://www.imooc.com/static/img/index/logo.png" class="left" style="magin-right: 10px;" />
      <p class="bfc">某一段文字……</p>
    </div>
  </body>
</html>
```

## float 布局

- 如何实现圣杯布局和双飞翼布局
- 手写 clearFix

圣杯布局和双飞翼布局的目的：

- 三栏布局，中间一栏最先加载和渲染（内容最重要）
- 两侧内容固定，中间内容随着宽度自适应
- 一般用于 PC 网页

圣杯布局和双飞翼布局的技术总结：

- 使用 float 布局
- 两侧使用 margin 负值，以便和中间内容横向重叠
- 防止中间内容呗两侧覆盖，一个用 padding 一个用 margin

```html
<!-- 圣杯布局 -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>圣杯布局</title>
    <style type="text/css">
      body {
        min-width: 550px;
      }
      #header {
        text-align: center;
        background-color: #f1f1f1;
      }

      #container {
        padding-left: 200px;
        padding-right: 150px;
      }
      #container .column {
        float: left;
      }

      #center {
        background-color: #ccc;
        width: 100%;
      }
      #left {
        position: relative;
        background-color: yellow;
        width: 200px;
        margin-left: -100%;
        right: 200px;
      }
      #right {
        background-color: red;
        width: 150px;
        margin-right: -150px;
      }

      #footer {
        text-align: center;
        background-color: #f1f1f1;
      }

      /* 手写 clearfix */
      .clearfix:after {
        content: "";
        display: table;
        clear: both;
      }
    </style>
  </head>
  <body>
    <div id="header">this is header</div>
    <div id="container" class="clearfix">
      <div id="center" class="column">this is center</div>
      <div id="left" class="column">this is left</div>
      <div id="right" class="column">this is right</div>
    </div>
    <div id="footer">this is footer</div>
  </body>
</html>
```

```html
<!-- 双飞翼布局 -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>双飞翼布局</title>
    <style type="text/css">
      body {
        min-width: 550px;
      }
      .col {
        float: left;
      }

      #main {
        width: 100%;
        height: 200px;
        background-color: #ccc;
      }
      #main-wrap {
        margin: 0 190px 0 190px;
      }

      #left {
        width: 190px;
        height: 200px;
        background-color: #0000ff;
        margin-left: -100%;
      }
      #right {
        width: 190px;
        height: 200px;
        background-color: #ff0000;
        margin-left: -190px;
      }
    </style>
  </head>
  <body>
    <div id="main" class="col">
      <div id="main-wrap">this is main</div>
    </div>
    <div id="left" class="col">this is left</div>
    <div id="right" class="col">this is right</div>
  </body>
</html>
```

## 清除浮动

```css
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}

.clearFix {
  *zoom: 1; /* 兼容IE低版本 */
}
```

## flex 布局

- flex 实现一个三点的色子

常用语法回顾：

- flex-direction
- justify-content
- align-items
- flex-wrap
- align-self

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>flex 画骰子</title>
    <style type="text/css">
      .box {
        width: 200px;
        height: 200px;
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 20px;

        display: flex;
        justify-content: space-between;
      }
      .item {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #666;
      }
      .item:nth-child(2) {
        align-self: center;
      }
      .item:nth-child(3) {
        align-self: flex-end;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <span class="item"></span>
      <span class="item"></span>
      <span class="item"></span>
    </div>
  </body>
</html>
```

## CSS 定位

1. absolute 和 relative 分别依据什么定位

relative 依据自身定位
absolute 依据最近一层的定位元素定位
依据定位元素：

- absolute relative fixed
- body

2. 剧中对齐有哪些实现方式

- 水平剧中

* inline 元素：text-align: center
* block 元素：margin: auto;
* absolute 元素：left: 50% + margin-left 负值

- 垂直居中

* inline 元素：line-height 的值等于 height 值
* absolute 元素：top： 50% + margin-top 负值
* absolute 元素：transform: translate(-50%, -50%);
* absolute 元素：top,left,bottom,right = 0 + margin:auto

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>垂直对齐</title>
    <style type="text/css">
      .container {
        border: 1px solid #ccc;
        margin: 10px;
        padding: 10px;
        height: 200px;
      }
      .item {
        background-color: #ccc;
      }

      .container-1 {
        text-align: center;
        line-height: 200px;
        height: 200px;
      }

      .container-2 {
        position: relative;
      }
      .container-2 .item {
        width: 300px;
        height: 100px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        top: 50%;
        margin-top: -50px;
      }

      .container-3 {
        position: relative;
      }
      .container-3 .item {
        width: 200px;
        height: 80px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .container-4 {
        position: relative;
      }
      .container-4 .item {
        width: 100px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <div class="container container-1">
      <span>一段文字</span>
    </div>

    <div class="container container-2">
      <div class="item">this is item</div>
    </div>

    <div class="container container-3">
      <div class="item">this is item</div>
    </div>

    <div class="container container-4">
      <div class="item">this is item</div>
    </div>
  </body>
</html>
```

## 图文样式

- line-height 如何继承

```html
<style>
  body {
    font-size: 20px;
    line-height: 200%;
  }
  p {
    font-size: 16px;
  }
</style>

<body>
  <p>AAAAA</p>
</body>
```

如果写具体数值，如 30px，则继承该值

```html
<style>
  body {
    font-size: 20px;
    line-height: 30px;
  }
  p {
    font-size: 16px;
  }
</style>

<body>
  <!-- p标签的line-height= 30px； 即从父标签中继承来的 -->
  <p>AAAAA</p>
</body>
```

如果写比例，如 2/1.5，则继承该比例，也就是 line-height=比例 \* 当前 font-size

```html
<style>
  body {
    font-size: 20px;
    line-height: 1.5;
  }
  p {
    font-size: 16px;
  }
</style>

<body>
  <!-- p标签的line-height= 1.5 * 16px = 24px -->
  <p>AAAAA</p>
</body>
```

写百分比，如 200%，则继承计算出来的值

```html
<style>
  body {
    font-size: 20px;
    line-height: 200%;
  }
  p {
    font-size: 16px;
  }
</style>

<body>
  <!-- p标签的line-height= 200% * 20px = 40px; 继承计算后的结果 -->
  <p>AAAAA</p>
</body>
```

> 注意：这里的继承是就近继承，如果 p 标签有父标签，并且也设置了 line-height，那么就会从他的父标签中去继承。

## 响应式

1. rem 是什么

rem 是一个长度单位

- px，绝对长度单位，最常用
- em，相对长度单位，相对于父元素，不常用
- rem，相对长度单位，相对于根元素，常用于响应式布局

2. 响应式布局的常见方案

- media-query（媒体查询），根据不同的屏幕宽度设置根元素的 font-size
- rem，基于根元素的相对单位

3. vw/vh
- rem的弊端
- 网页视口尺寸
- vw/vh

