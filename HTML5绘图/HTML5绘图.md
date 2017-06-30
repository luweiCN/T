# 工作中遇到的问题

@(工作)

## 1. CSS实现背景透明，内容不透明
### （1）方法一：背景和内容分离（有兼容性问题）
直接用两个DIV放在同一个位置就行了，一个不透明DIV，一个文字DIV。
```
HTML代码：
<div class="bg"></div>
<div class="con">content</div>
CSS代码:
.bg{
    width:100px;
    height:100px;
    background:#000;
    position:relative;
    filter:alpha(opacity=70); /*IE专属滤镜*/
    opacity:0.7;
}
.con{
    width:100px;
    height:100px;
    color: #ffff00;
    position: absolute;
    top: 0;
}
```
缺点：需要写绝对定位或负margin，并出现空内容的DIV。由于bg是空的所以可以用伪类来写。
```
HTML代码：
<div class="section">content</div>
CSS代码:
.section {
    display: block;
    width: 100%;
    height: 600px;
    background: #f1f3f5;
    position: relative;
    color: #fff;
    z-index: 1;
}
.section:after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.35;
    background: #000000;
    z-index: -1;
}
```
但是这种方法在某些情况下非常复杂，如下示例，鼠标经过商标后展现展现透明的提示文案，就需要控制2个DIV。
![](http://images.cnitblog.com/blog/278431/201411/131520078666034.gif)
### （2）方法二：全兼容
实现透明的css方法通常有以下3种方式，以下是不透明度都为80%的写法：
* css3的opacity:x，x 的取值从 0 到 1，如opacity: 0.8
* css3的rgba(red, green, blue, alpha)，alpha的取值从 0 到 1，如rgba(255,255,255,0.8)
* IE专属滤镜 filter:Alpha(opacity=x)，x 的取值从 0 到 100，如filter:Alpha(opacity=80)
#### css3的opacity：
**兼容性：** IE6、7、8不支持，IE9及以上版本和标准浏览器都支持
**使用说明：** 设置opacity元素的所有后代元素会随着一起具有透明性，一般用于调整图片或者模块的整体不透明度
**所以，使用opacity实现《背景透明，文字不透明》是不可取的。**
#### css3的rgba
**兼容性：** IE6、7、8不支持，IE9及以上版本和标准浏览器都支持
**使用说明：** 设置颜色的不透明度，一般用于调整background-color、color、box-shadow等的不透明度。
**所以使用rgba实现背景透明，文字不透明是可取的。**
#### IE专属滤镜 filter:Alpha(opacity=x)
**使用说明：** IE浏览器专属，问题多多，本文以设置背景透明为例子，如下：

1. 仅支持IE6、7、8、9，在IE10版本被废除
2. 在IE6、7中，需要激活IE的haslayout属性(如：zoom:1或者overflow:hidden)，让它读懂filter:Alpha
3. 在IE6、7、8中，设置了filter:Alpha的元素，父元素设置position:static(默认属性)，其子元素为相对定位，可让子元素不透明
#### 全兼容的方案
上以上3点分析可知，设置透明背景文字不透明，可采用的属性有rgba和IE的专属滤镜filter:Alpha，其兼容性如下图所示：
![](http://images.cnitblog.com/blog/278431/201411/131314299751998.jpg)
针对IE6、7、8浏览器，我们可以采用fiter:Alpha，针对标准浏览器我们采用rgba，那么问题来了，IE9浏览器2个属性都支持，一起使用会重复降低不透明度。
那么，如何只对IE6、7、8使用fiter:Alpha如何实现呢？[《CSS hack整理》](http://www.cnblogs.com/PeunZhang/archive/2012/04/09/2437563.html)一文，里面有IE的相关hack，找到只支持IE 6、7、8的方案，如下：
```
/* 只支持IE6、7、8 */
media \0screen\,screen\9 {...}
```
全兼容实例：
```
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>背景透明，文字不透明</title>
<style>
*{
    padding: 0;
    margin: 0;
}

body{
    padding: 50px;
    background: url(img/bg.png) 0 0 repeat;
}

.demo{
    padding: 25px;
    background-color: rgba(0,0,0,0.5);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */
}
.demo p{
    color: #FFFFFF;
}
media \0screen\,screen\9 {/* 只支持IE6、7、8 */
.demo{
    background-color:#000000;
    filter:Alpha(opacity=50);
    position:static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
    *zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
  }
.demo p{
    position: relative;/* 设置子元素为相对定位，可让子元素不继承Alpha值 */
  }
}

</style>
</head>
<body>

<div class="demo">
    <p>背景透明，文字不透明</p>
</div>

</html>
```
## 2. Jquery ajax方法解析返回的json数据
在用jQuery的ajax方法传递接收json数据时发现一个问题，那就是返回的data数据，有时候可以直接作为json数据使用，可有时候又不行。查了些资料,解释如下:
```
$.ajax({
    url: ajaxurl,
    type: "POST",
    success: function(data){
    //假设返回的json数据里有status及info2个属性
    //有时候可以直接ajaxobj.status或者ajaxobj["status"]去访问
    //但有时候，却要通过eval()或者 $.parsejson();才可以通过ajaxobj.status访问，而且这种情况下，需要是complete而不是success
    ajaxobj=eval("("+data+")");
    //或者$.parsejson()
    //var ajaxobj = $.parsejson(data);
    if(ajaxobj.status=="0")
    {
        alert("请登陆.");
    }
    else if(ajaxobj.status=="1")//未绑定微博
    {
        alert(ajaxobj.info);
    }
        return true;
    },
    error:function(ajaxobj){
        if(ajaxobj.responseText!='')
        alert(ajaxobj.responseText);
    }
});
```
**先说明第一种情况: **
能够直接 data.属性名访问的情况，服务器端代码一定是直接return的一个常量字符串。
什么是常量字符串呢，常量字符串就是指直接用“”组成的字符串，没有定义String 变量直接把一串“”print到前台的情况，就可以直接data.属性名访问，而且jquery端只要写success就可以拿到。
**下面是造成要eval并且不能进入success的原因：**
这种情况是因为服务器端向外print的时候是一个String对象，通常此类问题在我的代码里是因为后台json比较复杂，在组织的时候我用到了StringBuffer，然后最后print的时候print的是StringBuffer对象的toString，所以就相当于print了一个String对象
这种情况下jquery的ajax方法就不会进入success方法，只能用complete接收，并且想要解析data里的json数据的话，必须对data.responseText进行eval ()或者 $.parsejson();
除此两点，还有需要注意的是，如果你使用的是jq1.4，那么他对json的格式有着更严格的要求，所有的key和属性都要用双引号标注起来，虽然key不用双引号原生的js是允许的，但是jq1.4似乎有这个要求。
## 3. 对json按某个键的值进行排序
下面是js代码：（请将其保存为sortJson.js）：
```
$(document).ready(function () {
    //对json进行降序排序函数
    var colId="age"
    var desc = function(x,y)
    {
        return (x[colId] < y[colId]) ? 1 : -1
    }
    //对json进行升序排序函数
    var asc = function(x,y)
    {
        return (x[colId] > y[colId]) ? 1 : -1
    }
    var arr2 = [
        {name:"kitty", age:12},
        {name:"sonny", age:9},
        {name:"jake", age:13},
        {name:"fun", age:24}
    ];
    document.writeln("按age进行升序排序：<br>");
    arr2.sort(asc); //升序排序
    document.writeln(JSON.stringify(arr2));


    document.writeln("<br>按age进行降序排序：<br>");
    arr2.sort(desc); //降序排序
    document.writeln(JSON.stringify(arr2));

});
```
下面是html代码：
```
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script type="text/javascript" src="http://lib.sinaapp.com/js/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="sortJson.js"></script>
</head>
<body>

</body>
</html>
```
下面是排序的结果：
![](http://img.blog.csdn.net/20161207154550355)
## 4. js return和匿名函数
今天一个刚学js的朋友给了我一段代码问为什么方法不执行，代码如下：
```
function makefunc(x) {
    return function (){
        return x;
    }
}
alert(makefunc(0));
```
其实不是不执行，只是朋友的意思这里alert出来的应该是“0”，而不是function (){return x;}。
不是脚本写错了，只是没搞懂return，从当前函数退出，并从那个函数返回一个值。如果返回的是一个函数，那么返回的也是函数本身。
可以这样修改上面的代码,就是alert(makefunc(0)())：

如果要返回函数执行的结果那么首先要让这个函数执行，例如：
代码如下:
```
function makefunc(x) {
    return (function (){
        return x;
    })();
}
alert(makefunc(0));
```
这里有一个匿名函数， 代码如下:
```
(function (){
 return x;
})();
```
在第一个括号内是匿名函数，第二个括号用于调用该匿名函数，您可以在第二个括号中传入所需的参数。例如：
```
(function( x , y){
    alert( x + y);
})(2 ,3 );
```
## 5. CSS中ul li居中的问题
一直以为对ul li居中对齐已经掌握了。但最近做项目时发现之前li的float:left方法显然有一个问题，就是无法居中（水平），只能使用padding-left或margin-right的方法方法来固定其居中。但这样可能在宽屏与窄屏的显示不一致。
使用这种方法主要是利用li的浮动固定宽度来实现，li的默认display为block，将其这个属性改为inline便可实现这种ul li居中的问题。
```
<style type="text/css">
#bNav{
    margin-top:10px;
    background:#D9EBF5;
    text-align:center; //这里是为了居中显示
}
#bNav ul{
    padding:4px 0;
    margin:0;
    overflow:hidden;
}
#bNav ul li{
    display:inline;  //这里是为了让li在一行显示
    padding:0;
}
</style>

<div id="bNav" class="bNav">
    <ul>
        <li><a href="index.aspx" title="Home">Home</a></li>
        <li>|</li>
        <li><a href="info.aspx?info_id=8" title="About Us">About Us</a></li>
        <li>|</li>
        <li><a href="info.aspx?info_id=9" title="Department Design">Department Design</a></li>
        <li>|</li>
        <li><a href="info.aspx?info_id=10" title="Law Declaration">Law Declaration</a></li>
    <li>|</li>
        <li><a href="info.aspx?info_id=11" title="Contact Us">Contact Us</a></li>
        <li>|</li>
        <li><a href="info.aspx?info_id=12" title="Application Agent">Application Agent</a></li>
        <li>|</li>
        <li><a href="info.aspx?info_id=13" title="Job Services">Job Services</a></li>
        <li>|</li>
        <li><a href="info.aspx?info_id=14" title="Apply Link">Apply Link</a></li>
    </ul>
</div>
```
## 6. 注意：JSON无法通过push()添加新数据
如下所示，已有json值：
```
json = {"width":"10","height":"10"}
```
无法通过 json.push("long":"10")插入一个新值。
原因：
* 原因一：
上面的json本质上是一个对象，只是创建一个符合json格式的JavaScript对象，而对象没有push方法，push是数组方法，使用push方法会出错：
```
TypeError: Object #<Object> has no method 'push'
```
对于函数调用也有使用错误，参数的分隔符只有",",而没有":"。
**给对象插入值，直接赋值就行了。**
```
var json = {"width":"10","height":"10"};
json['long']="10";//或者json.long = "10"

var json1 = {"width":"10","height":"10"};
json2 = {"weight":"10","price":"2.5"};

json1['info'] = json2;
//json1 = {"width":"10","height":"10","info":{"weight":"10","price":"2.5"}};
```
* 原因二：
JSON 只是一种数据结构，JSON 是有一种由一定规则的纯文本内容。本身不具备任何的操作方法，需要在编程语言中，转换相应的对象后才可进行操作。
```
var obj = JOSN.parse('{"width":"10","height":"10"}')
```
push 是 javascript 中的数组的方法，你的这玩意是对象，所以肯定是不能使用的。
## 7. 如何用js得到当前页面的url信息方法(JS获取当前网址信息)
* 设置或获取对象指定的文件名或路径。
```
window.location.pathname

//url = http://localhost:8086/topic/index?topicId=361
alert(window.location.pathname); //则输出：/topic/index
```
* 设置或获取整个 URL 为字符串。
```
window.location.href
//url =http://localhost:8086/topic/index?topicId=361
alert(window.location.href)
//则输出：http://localhost:8086/topic/index?topicId=361
```
* 设置或获取与 URL 关联的端口号码。
```
window.location.port
//url=http://localhost:8086/topic/index?topicId=361
alert(window.location.port); //则输出：8086
```
* 设置或获取 URL 的协议部分。
```
window.location.protocol
//url = http://localhost:8086/topic/index?topicId=361
alert(window.location.protocol); //则输出：http:
```
* 设置或获取 href 属性中在井号“#”后面的分段。
```
window.location.hash
```
* 设置或获取 location 或 URL 的 hostname 和 port 号码。
```
window.location.host
//url = http://localhost:8086/topic/index?topicId=361
alert(window.location.host); //则输出：http:localhost:8086
```
* 设置或获取 href 属性中跟在问号后面的部分。
```
window.location.search
//url = http://localhost:8086/topic/index?topicId=361
alert(window.location.search); //则输出：?topicId=361
```
## 8. js获取url传递参数，js获取url？号后面的参数
### 方法一：正则分析法
```
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```
### 方法二
```
<Script language="javascript">
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
</script>
```
使用方法：
```
<Script language="JavaScript">
    var Request = new Object();
    Request = GetRequest();
    var 参数1,参数2,参数3,参数N;
    参数1 = Request[''参数1''];
    参数2 = Request[''参数2''];
    参数3 = Request[''参数3''];
    参数N = Request[''参数N''];
</Script>
```
### 方法三
```
/**
 * 获取指定的URL参数值
 * URL:http://www.quwan.com/index?name=tyler
 * 参数：paramName URL参数
 * 调用方法:getParam("name")
 * 返回值:tyler
 */
function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}
```
## 9. [文本溢出显示省略号(…)](http://www.css88.com/archives/5206)
大家应该都知道用text-overflow:ellipsis属性来实现单行文本的溢出显示省略号(…)。当然部分浏览器还需要加宽度width属性。
```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```
但是这个属性并不支持多行文本溢出显示省略号，这里根据应用场景介绍几个方法来实现这样的效果。
### WebKit浏览器或移动端的页面
在WebKit浏览器或移动端（绝大部分是WebKit内核的浏览器）的页面实现比较简单，可以直接使用WebKit的CSS扩展属性(WebKit是私有属性)-webkit-line-clamp ；注意：这是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。

-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。
常见结合属性：

1. display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
2. -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
3. text-overflow: ellipsis;，可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。
```
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```
这个属性比较合适WebKit浏览器或移动端（绝大部分是WebKit内核的）浏览器。具体例子可以查看http://www.css88.com/webkit/-webkit-line-clamp/。
### 跨浏览器兼容的方案
比较靠谱简单的做法就是设置相对定位的容器高度，用包含省略号(…)的元素模拟实现；
例如：
```
p {
    position:relative;
    line-height:1.4em;
    /* 3 times the line-height to show 3 lines */
    height:4.2em;
    overflow:hidden;
}
p::after {
    content:"...";
    font-weight:bold;
    position:absolute;
    bottom:0;
    right:0;
    padding:0 20px 1px 45px;
    background:url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png) repeat-y;
}
```
这里注意几点：
1. height高度真好是line-height的3倍；
2. 结束的省略好用了半透明的png做了减淡的效果，或者设置背景颜色；
3. IE6-7不显示content内容，所以要兼容IE6-7可以是在内容中加入一个标签，比如用<span class="line-clamp">...</span>去模拟；
4. 要支持IE8，需要将::after替换成:after；
### JavaScript 方案
用js也可以根据上面的思路去模拟，实现也很简单，推荐几个做类似工作的成熟小工具：
#### 1. Clamp.js
下载及文档地址：https://github.com/josephschmitt/Clamp.js
使用也非常简单：
```
var module = document.getElementById("clamp-this-module");
$clamp(module, {clamp: 3});
```
#### 2.jQuery插件-jQuery.dotdotdot
这个使用起来也很方便：
```
$(document).ready(function() {
	$("#wrapper").dotdotdot({
		//	configuration goes here
	});
});
```
下载及详细文档地址：https://github.com/BeSite/jQuery.dotdotdot或http://dotdotdot.frebsite.nl/
## 10. CSS中hover改变子元素和其它元素样式
这个就是css选择器的使用情况了，+表示同级元素（并且紧挨着），>表示子元素，~表示同级元素（不需要紧挨着）
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>

<style>
    #a {color : #FFFF00;}

    #a:hover + #c{color : #00FF00;}
    #a:hover + #c > #b{color : #0000FF;}
    #b:hover ~ #e{
    	color : #0000FF;
    }
</style>
<div id='a'>元素1

</div>
<div id='c'>元素3
    <div id='b'>元素2</div>
    <div id='d'>元素3</div>
    <div id='e'>元素4</div>
</div>
</html>
```
## 11.表格表头在分辨率较小的情况下的换行问题
问题：我们的表格正常情况下如下图；
![](http://i.imgur.com/VxXkXzS.png)
但是，在分辨率比较小的情况，表头项会换行，如下图；
![](http://i.imgur.com/USrRkdF.png)
这样的换行不仅不美观，还破坏了语义结构，我们可以使用html5的`<wbr>`软换行标签，让表头项在我们希望的地方换行，如下图；
![](http://i.imgur.com/ySHLJ0w.png)
具体做法就是，给每个表头项添加`<nobr>`尽职换行标签，然后在想要换行的地方添加`<wbr />`软换行标签：
```
<tr>
    <th><nobr>平均<wbr />活动量</nobr></th>
    <th><nobr>与班级<wbr />平均值比</nobr></th>
    <th><nobr>平均<wbr />停留时间</nobr></th>
    <th><nobr>与班级<wbr />平均值比</nobr></th>
    <th><nobr>参与<wbr />次数</nobr></th>
    <th><nobr>时间<wbr />详情</nobr></th>
    <th><nobr>停留<wbr />时长</nobr></th>
    <th><nobr>视频<wbr />呈现</nobr></th>
    <th><nobr>新建</nobr></th>
    <th><nobr>已有<wbr />记录</nobr></th>
</tr>
```