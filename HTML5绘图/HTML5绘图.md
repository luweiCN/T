# HTML5绘图

@(学习笔记)

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


### 3. 代码演示
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
![](http://i.imgur.com/fCLvEL9.png)

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

### 3. 代码演示
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
![](http://i.imgur.com/3rOiEUH.png)

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

### 3. 代码演示
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
![](http://i.imgur.com/4sBCD0L.png)
## 第4章 HTML5设置阴影

### 1. 设置阴影涉及到4个属性
* shadowBlur:阴影模糊度，浮点数越大越模糊。
* shasowColor:阴影颜色。
* shadowOffsetX: x方向的偏移
* shadowOffsetY: y方向的偏移
### 2. 代码演示
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

            ctx.shadowBlur = 3.6;
            ctx.shadowColor = '#000';
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;

            ctx.strokeStyle = 'red';
            ctx.font = 'bold 34px 微软雅黑';
            ctx.strokeText('大家好', 100, 80);

            ctx.fillStyle = 'green';
            ctx.shadowBlur = 4.6;
            ctx.shadowColor = 'orange';
            ctx.shadowOffsetX = -10;
            ctx.shadowOffsetY = 5;
            ctx.fillRect(160, 150, 100, 50);
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="400" height="300" style="border: 1px solid #000"></canvas>
</body>
</html>
```
![](http://i.imgur.com/9yjW3zf.png)
## 第5章 HTML5画直线和画弧
### 1.绘制路径的步骤是以下4步
1. 调用`CanvasRenderingContext2D`对象的`beginPath()`方法开始定义路径。
2. 调用`CanvasRenderingContext2D`的各种方法添加路径，比如添加一段弧或者贝赛尔曲线。
3. 调用`CanvasRenderingContext2D`的`closePath`方法关闭路径。
4. 调用`CanvasRenderingContext2D`的`fill()`或`stroke()`方法来填充路径或绘制路径边框。`fill()`就是画一个实心的；`stroke()`是画一个空心的。
### 2.添加路径方法
* `arc()`方法创建弧/曲线（用于创建圆或部分圆）。
* `arcTo()`方法在画布上创建介于两个切线之间的弧/曲线。
* `bezierCurveTo()`方法通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。方法在画布上创建介于两个切线之间的弧/曲线。
* `lineTo()`方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。
* `moveTo`把路径移动到画布中的指定点，不创建线条。
* `quadraticCurveTo()`方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。
* `rect()`方法创建矩形。
### 3.画直线和矩形
#### （1）画直线
1. `moveTo`把路径移动到画布中的指定点，不创建线条。
2. `lineTo()`方法添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）
#### （2）画矩形
1. 使用`ctx`对象的`rect()`方法，不是`fillRect()`，而是`rect()`
2. 画矩形，我们得把这个放到绘制的路径当中去，要在路径尚未关闭之前
### 4.画弧线
画弧线是应`arc()`方法，`arc()`不只是可以画弧，因为圆也算由弧构成，所以画圆也可能用到它。
**语法：**
```
ctx.arc(x, y, r, sAngle, eAngle, counterdockwise);
```
**参数说明：**
* x:圆心的x坐标
* y:圆心的y坐标
* r:圆弧的半径
* sAngle：圆弧的开始角度
* eAngele：圆弧的终止角度
* counterdockwise：可选。规定顺时针还是逆时针绘图。false=顺时针；true=逆时针。默认为false
### 5.代码演示
#### （1）画直线和矩形
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

            ctx.beginPath();
            ctx.moveTo(80, 80);
            ctx.lineTo(200, 200);
            ctx.rect(20, 20, 100, 45);
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'orange';
            ctx.stroke();
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="400" height="300" style="border: 1px solid #000"></canvas>
</body>
</html>
```
![](http://i.imgur.com/qHnt50t.png)
#### （2）画圆弧
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

            ctx.beginPath();
            ctx.arc(60, 100, 50, 0, 2*Math.PI);
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'orange';
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(200, 100, 50, 0, 1.5*Math.PI);
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'orange';
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(340, 100, 50, 0, 1.5*Math.PI);
//            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'orange';
            ctx.stroke();
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="400" height="300" style="border: 1px solid #000"></canvas>
</body>
</html>
```
![](http://i.imgur.com/v0QUGwc.png)
## 第6章 HTML5画两个切线间的弧
arc()方法是绘制一个圆以及圆的一部分。arcTo()方法在画布上创建介于两个切线之间的弧/曲线。
**语法：**
```
ctx.arcTo(x1, y1, x2, y2, r);
```
**参数说明：**
* x1:弧起点的x坐标
* y1:弧起点的y坐标
* x2:弧终点的x坐标
* y2:弧终点的y坐标
* r:弧的半径
### 代码演示
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

            ctx.beginPath();

            ctx.moveTo(20,20);           // 创建开始点
            ctx.lineTo(100,20);          // 创建水平线
            ctx.arcTo(150,20,150,70,50); // 创建弧
            ctx.lineTo(150,120);         // 创建垂直线

            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'orange';
            ctx.stroke();
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="400" height="300" style="border: 1px solid #000"></canvas>
</body>
</html>
```
![](http://i.imgur.com/Feom5os.png)
## 第7章 HTML5绘制贝塞尔曲线
### 1.二次贝赛尔曲线绘制
`quadraticCurveTo()`方法通过使用表示二次贝塞尔曲线的指定控制点，向当前路径添加一个点。
**提示：**二次贝塞尔曲线需要两个点。第一个点是用于二次贝塞尔计算中的控制点，第二个点是曲线的结束点。曲线的开始点是当前路径中最后一个点。如果路径不存在，那么请使用`beginPath()`和`moveTo()`方法来定义开始点。
![](http://i.imgur.com/aCypleC.png)
* 开始点：moveTo(20,20)
* 控制点：quadraticCurveTo(20,100,200,20)

**语法：**
```
ctx.quadraticCurveTo(cpx,cpy,x,y);
```
**参数说明：**
* cpx:贝塞尔控制点的 x 坐标
* cpy:贝塞尔控制点的 y 坐标
* x:结束点的 x 坐标
* y:结束点的 y 坐标
### 2.三次贝赛尔曲线绘制
`bezierCurveTo()`方法通过使用表示三次贝塞尔曲线的指定控制点，向当前路径添加一个点。
**提示：**三次贝塞尔曲线需要三个点。前两个点是用于三次贝塞尔计算中的控制点，第三个点是曲线的结束点。曲线的开始点是当前路径中最后一个点。如果路径不存在，那么请使用 beginPath() 和 moveTo() 方法来定义开始点。

![enter image description here](http://images2015.cnblogs.com/blog/385229/201608/385229-20160829104858933-1753348065.gif)
### 参数讲解
* P0是曲线的开始点
* P3是曲线的结束点
* P1和P2是控制曲线走势的控制点，所以这两个点事实上是辅助作用，并不会在画布中被绘制出来

#### t参数重点讲解
t是辅助参数，可以看到它的值范围是[0,1]。这个t值作用于图中的所有直线（P0P1、P1P2、P2P3、两条绿线、蓝线）。
**注意：**图中真实绘制出来的，就只有红线，其他的都只是辅助的，并不会被真实绘制出来。
在上图中，你可以看成这个三次贝塞尔曲线由两个二次贝塞尔曲线组成。
* P0P1P2组成的二次贝塞尔曲线
* P1P2P3组成的二次贝塞尔曲线。

所以要把上图的三次贝塞尔曲线拆分成两个二次贝塞尔曲线讲解。
例如：
对于第一个二次贝塞尔曲线P0P1P2，
当t=0.5的时候（其实就是[0,1]的中间值，这个比较好理解），情况应该是这样的：
1. 找到P0P1线（方向P0->P1，这是有方向的线段）的50% (因为t=0.5,即0.5*100%) 的位置，标上一个绿色的点
2. 同1步骤，在P1P2线上的50%位置上标上一个绿色的点
3. 把步骤1和2的绿色点连成一条线
4. 然后在这条绿色的50%位置处标上一个红点，这个红点就是实际绘制的曲线中的一个点。（当t值不断变化，就会出现不同位置的红点，组成一条曲线）

同理，第二个二次贝塞尔曲线的理解跟第一个二次贝塞尔曲线一样！
设计师给了设计稿给我，怎么才能把设计稿里面的曲线还原出来？！
在PS里面，画弧线使用钢笔工具的，所以跟我们的原理是一样的，只要设计师给出开始点，结束点，控制点就OK啦。
### 3.代码演示
#### （1）二次贝赛尔曲线绘制
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <script language="JavaScript">
        function init()
        {
            var can=document.getElementById("can");
            var ctx=can.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(200,200)
            ctx.quadraticCurveTo(260,60,300,300);

            ctx.closePath();
            ctx.lineWidth=5;
            ctx.strokeStyle="orange";
            ctx.stroke();
        }
    </script>
</head>
<body onload="init();">
    <canvas id="can" width="400" height="300" style="border: 1px #000 solid;"></canvas>
</body>
</html>
```
![](http://i.imgur.com/GkG6vDs.png)
#### （2）三次贝赛尔曲线绘制
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <script language="JavaScript">
        function init()
        {
            var can=document.getElementById("can");
            var ctx=can.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(100,60);
            ctx.moveTo(20,20)
            ctx.bezierCurveTo(20,100,300,100,300,20)
            ctx.closePath();
            ctx.lineWidth=5;
            ctx.strokeStyle="orange";
            ctx.stroke();
        }
    </script>
</head>
<body onload="init();">
    <canvas id="can" width="400" height="300" style="border: 1px #000 solid;"></canvas>
</body>
</html>
```
![](http://i.imgur.com/5tyXTnY.png)
## 第8章 HTML5填充样式
### 1.HTML5支持的填充有3种渐变
1. 线性渐变
2. 圆形渐变（径向渐变）
3. 图案填充
### 2.使用线性渐变
* 第一步，我们调用`ctx`的`createLinearGradient(x0,y0,x1,y1)`方法，用这个方法返回一个`CavasGradient`对象。
* 第二步，我们在这个对象（`CavasGradient`）上增加一个颜色，增加多个渐变的颜色，使用`addColorStop(offset,color)`方法。
但是注意这里面有一个参数：`offset`，就是偏移量，你增加颜色再什么地方。线性，它有起始点和终止点，这个`offset`参数是0到1之间的一个浮点数。第二个参数自然就是想要添加的颜色了。
* 第三步，加上颜色以后，我们可以指定`fillStyle`或`strokeStyle`属性，把这个填充成我们创建的`CavasGradient`对象。

#### `createLinearGradient(x0,y0,x1,y1)`语法说明：
**语法：**
```
ctx.createLinearGradient(x0,y0,x1,y1);
```
**参数说明：**
* x0:渐变开始点的 x 坐标
* y0:渐变开始点的 y 坐标
* x1:渐变结束点的 x 坐标
* y1:渐变结束点的 y 坐标
### 3.使用圆形渐变
圆形渐变的使用步骤和线性渐变类似，主要就是调用的函数不同，圆形渐变调用`createLinearGradient()`方法创建放射状/圆形渐变对象。
**语法：**
```
ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
```
**参数说明：**
* x0:渐变的开始圆的 x 坐标
* y0:渐变的开始圆的 y 坐标
* r0:开始圆的半径
* x1:渐变的结束圆的 x 坐标
* y1:渐变的结束圆的 y 坐标
* r1:结束圆的半径
### 4.使用图案填充

