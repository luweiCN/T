# HTML5绘图
## 第1章 HTML5绘图基础
### 1.绘图基础
1. 在HTML5以前的时代，前端开发者无法在HTML页面上动态地绘制图片。如果想要在前端动态的画出图片，我们就需要后端的服务器来生成图片，不断的修改前端的DOM，这样才能做到动态。
2. HTML5的出现改变了这个局面，HTM5新增了一个`<canvas../>`元素，相当于一个画布，可以获得一个`CanvasRenderingContext2D`对象，这个就是HTML5，也就是JavaScript提供的一个对象。
3. `CanvasRenderingContext2D`提供了很多画图API，比如说有画矩形的，画线的。

HTML5画图主要就是用这个对象，它提供的API来画图。所以学习HTML5画图主要学习这个对象里边的方法和属性的用法。
### 2.如何在HTML5上进行画图
* step1:得到 `<canvas../>`DOM对象
canvas就是一个HTML5的标签，它有width、height这样的属性，把它当成一个空白的画布。
* step2:调用Canvas对象的`getContext()`方法得到`CanvasRederingContext2D`对象
* step3:调用`CanvasRederingContext2D`完成画图

**示例代码：**
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <script>
        function init() {
            var can = document.getElementById('can');
            var ctx = can.getContext('2d');

            ctx.fillStyle = '#f00';
            ctx.fillRect(50, 50, 100, 100);
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="400" height="300" style="border: 1px #000 solid; margin: 30px auto"></canvas>
</body>
</html>
```
![Alt text](./1498722456751.png)

## 第2章 HTML5绘制几何图形
### 1.HTML5绘制几何图形的两个方法
* `filleRect(float x,float y,float width,float,height)`
它是填充一个矩形

* `strokeRect(float x,float y,float width,float,height)`
它是画一个空心的矩形,绘制矩形轮廓。

HTML5并没有直接提供其它几何图形（圆形、椭圆、三角）等方法。但是在后边的课程中，我们会学到HTML5绘制路径，绘制路径的时候我们可以画这些内容。
### 2.绘制几何图形的几个属性
* `fillStyle="颜色"` 是设置我们填充矩形的颜色。
* `strokeStyle="颜色"` 是画这个空心矩形的时候，这个空心的边框颜色是什么。
* `lineWidth=数字` 是空心矩形这个线的宽度。
* `lineJoin="meter|round|bevel"` 是两条线之间相交的样式，它的可选值有这个3个。（方块的，圆形的等等）

**示例代码：**
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <script>
        function init() {
            var can = document.getElementById('can');
            var ctx = can.getContext('2d');

            ctx.fillStyle = 'blue';
            ctx.fillRect(50, 50, 100, 60);

            ctx.strokeStyle = 'red';
            ctx.lineWidth = 6;
            ctx.lineJoin = 'miter';
            ctx.strokeRect(50, 150, 100, 65);

            ctx.lineJoin = 'round';
            ctx.strokeRect(200, 50, 100, 65);

            ctx.strokeStyle = 'green';
            ctx.lineWidth = 7;
            ctx.lineJoin = 'bevel';
            ctx.strokeRect(200, 150, 100, 65);
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="400" height="300" style="border: 1px solid #000"></canvas>
</body>
</html>
```
![Alt text](./1498722368832.png)

## 第3章 绘制字符串
### 1.绘制文字的两个方法
* `fillText(String text,float x,float y,[float maxwidth])`:填充字符串
凡是有fill，就是填充一个实心的字符串。
这里面的参数：
1. 第一个是文本类型的，就是你要画哪个内容。
2. 第二个是文本的横坐标。
3. 第三个是文本的纵坐标。
4. 第四个是最大宽度是多少，这个参数可以不要。

* `strokeText(String text,float x,float y,[float maxwidth])`:绘制边框
这个就是绘制一个空心的字符串。
### 2.其它的属性
* 给文字设置一些粗细、大小以及字体

```
font="bold 45px 宋体"
```

* textAlign设置绘制字符串的水平对齐方式

```
start|end|left|right|center
```

* textBaseAlign:重直对齐方式

```
top|hanging|middle|alphabetic|bottom
```
**示例代码：**
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
    <script>
        function init() {
            var can = document.getElementById('can');
            var ctx = can.getContext('2d');

            ctx.fillStyle = 'blue';
            ctx.font = '34px 微软雅黑 ';
            ctx.fillText('大家好', 100, 150);

            ctx.strokeStyle = 'red';
            ctx.font = 'bold 34px 微软雅黑';
            ctx.strokeText('大家好', 100, 200);
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="400" height="300" style="border: 1px solid #000"></canvas>
</body>
</html>
```
![Alt text](./1498728250062.png)
