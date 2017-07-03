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
使用团填充用到的是`createPattern()`方法；`createPattern()`方法在指定的方向内重复指定的元素。元素可以是图片、视频，或者其他 `<canvas>`元素。被重复的元素可用于绘制/填充矩形、圆形或线条等等。
**语法：**
```
ctx.createPattern(image,"repeat|repeat-x|repeat-y|no-repeat");
```
**参数说明：**
* image:规定要使用的图片、画布或视频元素。
* repeat:默认。该模式在水平和垂直方向重复。
* repeat-x:该模式只在水平方向重复。
* repeat-y:该模式只在垂直方向重复。
* no-repeat:该模式只显示一次（不重复）。
### 4.代码演示
#### （1）线性渐变
```
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <script language="JavaScript">
        function init()
        {
            var can=document.getElementById("can");
            var ctx=can.getContext("2d");

            var gred = ctx.createLinearGradient(0, 0, 200, 85);
            gred.addColorStop(0.3, '#eee');
            gred.addColorStop(0.6, '#aaa');
            gred.addColorStop(0.9, 'orange');

            ctx.fillStyle = gred;
            ctx.fillRect(60, 60, 200, 85);
        }
    </script>
</head>
<body onload="init();">
    <canvas id="can" width="400" height="300" style="border: 1px #000 solid;"></canvas>
</body>
</html>
```
![](http://i.imgur.com/jPR5hjV.png)
#### （2）圆形渐变（径向渐变）
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

            var gred = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
            gred.addColorStop(0, 'red');
            gred.addColorStop(1, '#fff');

            ctx.fillStyle = gred;
            ctx.fillRect(10, 10, 150, 100);

            var gred2 = ctx.createRadialGradient(200, 200, 5, 200, 200, 80);
            gred2.addColorStop(0, '#fff');
            gred2.addColorStop(1, '#f00');

            ctx.beginPath();
            ctx.arc(200, 200, 80, 0, 2*Math.PI);
            ctx.fillStyle = gred2;
            ctx.fill();
        }
    </script>
</head>
<body onload="init();">
    <canvas id="can" width="400" height="300" style="border: 1px #000 solid;"></canvas>
</body>
</html>
```
![](http://i.imgur.com/fqcnoGu.png)
#### （3）填充图案
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <script language="JavaScript">
        function init()
        {
            var can1 = document.getElementById("can1");
            var ctx1 = can1.getContext("2d");
            var can2 = document.getElementById("can2");
            var ctx2 = can2.getContext("2d");
            var can3 = document.getElementById("can3");
            var ctx3 = can3.getContext("2d");
            var can4 = document.getElementById("can4");
            var ctx4 = can4.getContext("2d");

            var img = new Image();
            img.src = 'img/pattern.png';

            var pat1= ctx1.createPattern(img,'no-repeat');
            var pat2= ctx2.createPattern(img,'repeat');
            var pat3= ctx3.createPattern(img,'repeat-x');
            var pat4= ctx4.createPattern(img,'repeat-y');

            ctx1.fillStyle = pat1;
            ctx1.fillRect(0,0,400,90)

            ctx2.fillStyle = pat2;
            ctx2.fillRect(0,0,400,90)

            ctx3.fillStyle = pat3;
            ctx3.fillRect(0,0,400,90)

            ctx4.fillStyle = pat4;
            ctx4.fillRect(0, 0, 400, 90)
        }
    </script>
</head>
<body onload="init();">
    <p>Canvas:no-repeat</p>
    <canvas id="can1" width="400" height="90" style="border: 1px #000 solid;">
        Your browser does not support the HTML5 canvas tag.
    </canvas>

    <p>Canvas:repeat</p>
    <canvas id="can2" width="400" height="90" style="border: 1px #000 solid;">
        Your browser does not support the HTML5 canvas tag.
    </canvas>

    <p>Canvas:repeat-x</p>
    <canvas id="can3" width="400" height="90" style="border: 1px #000 solid;">
        Your browser does not support the HTML5 canvas tag.
    </canvas>

    <p>Canvas:repeat-y</p>
    <canvas id="can4" width="400" height="90" style="border: 1px #000 solid;">
        Your browser does not support the HTML5 canvas tag.
    </canvas>
</body>
</html>
```
![](http://i.imgur.com/swjwvCD.png)
## 第9章 HTML5绘制位图
### 1.HTML5绘制位图的方法
HTML5绘制位图就是用`drawImage()`方法；`drawImage()`方法在画布上绘制图像、画布或视频。`drawImage()`方法也能够绘制图像的某些部分，以及增加或减少图像的尺寸。
**语法：**
```
ctx.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
```
**参数说明：**
* img:规定要使用的图像、画布或视频。
* sx:可选。开始剪切的 x 坐标位置。
* sy:可选。开始剪切的 y 坐标位置。
* swidth:可选。被剪切图像的宽度。
* sheight:可选。被剪切图像的高度。
* x:在画布上放置图像的 x 坐标位置。
* y:在画布上放置图像的 y 坐标位置。
* width:可选。在画布上的显示宽度。（伸展或缩小图像）
* height:可选。在画布上的显示高度。（伸展或缩小图像）
### 2.代码演示
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

            var img = new Image();
            img.src = 'img/ym.jpg';
            img.onload = function () {

                //画原图大小，位置是20*20
                ctx.drawImage(img, 20,20);

                //改变图像显示大小为80*120，位置是300*20
                ctx.drawImage(img, 300, 20, 80, 120);

                //截取原图60*60开始的100*120的矩形区域放在画布的500*20位置，并把图像显示大小设置为200*240
                ctx.drawImage(img, 60, 60, 100, 120, 500, 20, 200, 240);
            }
        }
    </script>
</head>
<body onload="init()">
    <canvas id="can" width="800" height="400" style="border: 1px #000 solid; margin: 30px auto"></canvas>
</body>
</html>
```
![](http://i.imgur.com/Y9TrY2Y.png)
## 第9章 案例：五子棋
### 1.初始化棋盘
棋盘用了一张背景图，在600*600的`canvas`画布上绘制了15*15的格子。
```
//初始化棋盘
function init() {
    var can = document.getElementById('can');
    var ctx = can.getContext('2d');

    ctx.strokeStyle = '#fff';
    t = 1;
    for(var i=0; i<15; i++){
        maps[i] = new Array();
        for(var j=0; j<15; j++){
            maps[i][j] = 0;
            ctx.strokeRect(j*40, i*40, 40, 40);
        }
    }
}
```
`maps`是一个全局的二维数组，分别对应棋盘的每个位置，有三个取值：
* `0`：表示此处没有棋子
* `1`: 表示此处有一个白子
* `2`: 表示此处有一个黑子

`t`是一个全局变量，表示当前是白子走还是黑子走，有两个取值：
* `1`: 表示下一步是白子走
* `2`: 表示下一步是黑子走
### 2.计算下棋的坐标
```
function play(e) {
    var can = document.getElementById('can');
    var ctx = can.getContext('2d');

    //鼠标点击在canvas中的坐标
    var clickX = e.clientX - can.offsetLeft;
    var clickY = e.clientY - can.offsetTop;

    //根据坐标计算点击触发具体的某行某列
    var row = clickX%40<20? Math.floor(clickX/40): Math.ceil(clickX/40); //行
    var col = clickY%40<20? Math.floor(clickY/40): Math.ceil(clickY/40); //列

    //判断当前位置有没有棋子
    if(maps[row][col] != 0){
        alert('当前位置已有棋子，请在其他位置下子');
        return;
    }

    //根据行列画图
    if(t == 1){
        ctx.drawImage(white, row*40-18, col*40-18);
        maps[row][col] = t;
        isWin(ctx, row, col);
        t = 2;
        return;
    }
    if(t == 2){
        ctx.drawImage(black, row*40-18, col*40-18);
        maps[row][col] = t;
        isWin(ctx, row, col);
        t = 1;
        return;
    }
}
```
这是程序的核心函数，要完成下棋首先我们要知道我们的鼠标点击的位置，然后计算出对应棋子应该放在哪个格子上：
* 鼠标点击在canvas中的坐标
```
var clickX = e.clientX - can.offsetLeft;
var clickY = e.clientY - can.offsetTop;
```
* 根据坐标计算点击触发具体的某行某列
```
var row = clickX%40<20? Math.floor(clickX/40): Math.ceil(clickX/40); //行
var col = clickY%40<20? Math.floor(clickY/40): Math.ceil(clickY/40); //列
```
* 点击之后还需要判断当前位置是不是已经有棋子了
```
if(maps[row][col] != 0){
	alert('当前位置已有棋子，请在其他位置下子');
	return;
}
```
以上三步都完成了，接下来就要开始根据得到的行列值来画棋子了：
```
if(t == 1){
    ctx.drawImage(white, row*40-18, col*40-18);
    maps[row][col] = t;
    isWin(ctx, row, col);
    t = 2;
    return;
}
if(t == 2){
    ctx.drawImage(black, row*40-18, col*40-18);
    maps[row][col] = t;
    isWin(ctx, row, col);
    t = 1;
    return;
}
```
这两个`if`语句结构很相似，分别处理白子和黑子下棋；
* 根据行列坐标以及t值判断当前是白子还是黑子和下棋的位置并画图
```
ctx.drawImage(white, row*40-18, col*40-18);
```
* 画完棋子把对应的`maps`数组位置的值置为相应的棋子编号,`isWin`是判断输赢的函数，后面给`t`赋值是实现黑白子交替下棋
```
maps[row][col] = t;
isWin(ctx, row, col);
t = 2;
```
### 3.输赢算法
```
function isWin(ctx, r, c) {
    var row;
    var col;
    //水平方向计数
    for(row = r,col = c-1;col-1>1&&maps[row][col] == t; col--){
        numY++;
    }
    for(row = r,col = c+1;col+1<15&&maps[row][col] == t; col++){
        numY++;
    }

    //垂直方向计数
    for(row = r-1,col = c;row-1>1&&maps[row][col] == t; row--){
        numX++;
    }
    for(row = r+1,col = c;row+1<15&&maps[row][col] == t; row++){
        numX++;
    }

    //左上到右下
    for(row = r-1,col = c-1;row-1>1&&col-1>1&&maps[row][col] == t; row--, col--){
        numL++;
    }
    for(row = r+1,col = c+1;row+1<15&&col+1<15&&maps[row][col] == t; row++, col++){
        numL++;
    }

    //右上到左下
    for(row = r-1,col = c+1;row-1>1&&col+1<15&&maps[row][col] == t; row--, col++){
        numR++;
    }
    for(row = r+1,col = c-1;row+1<15&&col-1>1&&maps[row][col] == t; row++, col--){
        numR++;
    }

//            alert('numX=' + numX + 'numY=' + numY + 'numL=' + numL +'numR=' + numR + 't=' + t);
    if(numL==5||numR==5||numX==5||numY==5&&t==2){
        alert('黑子赢了');
        if(confirm('是否继续？')){
            ctx.clearRect(0, 0, 600, 600);
            init();
        } else {
            play = null;
        };
    } else if(numL==5||numR==5||numX==5||numY==5&&t==1){
        alert('白子赢了');
        if(confirm('是否继续？')){
            ctx.clearRect(0, 0, 600, 600);
            init();
        } else {
            play = null;
        };
    }
    return numL=1,numR=1,numX=1,numY=1;

}
```
输赢算法的实现很简单，细节就不再赘述，简单说一下：
* 每下一个棋子，都会以该棋子为中心向它的水平、垂直、左右对角线方向查询，用四个变量存储查询计数的结果；
* 当在任一方向查询到无棋子或者是颜色不同的棋子，就会停止该方向的查询，进行下一个方向的查询；
* 否则，继续查询，相应的计数变量自增1；
* 当所有查询结束时，判断四个计数变量的值，只要有任意一个计数变量的值为5，说明该颜色棋子获胜。
### 3.功能与不足
####（1）功能
* 五子棋的基本功能
* 当下棋的位置已有棋子时会进行提示下到另一处
* 当一方获胜，会询问继续还是取消，继续就会清空棋盘；取消不会清空棋盘，但是也无法再下子，要想重新继续必须刷新界面
* 默认白子先下，当一方获胜，下一局，另一方先下
#### （2）不足
* 谷歌浏览器和火狐浏览器对一下语句有不同的解释
```
ctx.drawImage(white, row*40-18, col*40-18);
alert(1);
```
谷歌浏览器会先执行`alert(1)`,而火狐浏览器会先执行`ctx.drawImage(white, row*40-18, col*40-18)`，原因可能是谷歌浏览器把`ctx.drawImage(white, row*40-18, col*40-18)`当成了异步操作，而后我在网上搜索了很多资料，关于`drawImage`函数是同步还是异步的资料少之又少，但是我在webstrom中ctrl单击该函数跳到其声明处，也看不出是同步还是异步：
```
/**
@param {Element} img_elem
@param {Number} dx_or_sx
@param {Number} dy_or_sy
@param {Number} [dw_or_sw]
@param {Number} [dh_or_sh]
@param {Number} [dx]
@param {Number} [dy]
@param {Number} [dw]
@param {Number} [dh]
*/
CanvasRenderingContext2D.prototype.drawImage = function(img_elem,dx_or_sx,dy_or_sy,dw_or_sw,dh_or_sh,dx,dy,dw,dh) {};
```
而后在[segmentfault](https://segmentfault.com/q/1010000000708068)上看到有个人说是同步API，如若真实同步的，谷歌浏览器的解释就是错误的。

