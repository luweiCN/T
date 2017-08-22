# HTML5学习笔记
## 第一课 初识HTML5
### 1. 新的页面结构以及宽松的语法规范
```
<！DOCTYPE html> // 文档类型声明的
<html lang="zh-cn"> // 表示HTML文档的开始 lang表示文档的语言
<head> // 包含文档元数据的开始
<meta charset="utf8"> // 字符编码
<title>基本结构</title> // 设置文档标题
</head>
<body> // 表示 HTML 的文档内容

</body> // 表示HTML
```
### 2. 新的结构化元素——新增的语义化标签
#### （1）\<header>\</header> 页眉 
主要用于页面的头部的信息介绍，也可用于板块头部
#### （2）\<hgroup>\</hgroup> 页面上的一个标题组合
一个标题和一个子标题，或者标语的组合
#### （3）\<nav>\</nav> 导航 
包含链接的的一个列表
#### （4）\<footer>\</footer>页脚  
页面的底部或者版块底部
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
</head>
<body>
    <header>
        <!--header用在页面的头部或者板块的头部-->
        <hgroup>
            <!--hgroup一个标题和一个子标题，或者标语的组合-->
            <h1>妙味课堂</h1>
            <h2>带您进入富有人情味的IT培训</h2>
        </hgroup>
        <nav>
            <!--nav包含链接的的一个列表-->
            <h2>妙味精品课程</h2>
            <ul>
                <li><a href=“#”>javascript</a></li>
                <li><a href=“#”>html+css</a></li>
            </ul>
        </nav>
    </header>
    <footer>
        <!--用在页面的底部或者板块的底部-->
    </footer>
</body>
</html>
```
#### （5）\<section>\</section> 页面上的版块
用于划分页面上的不同区域,或者划分文章里不同的节。定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
```
<section>
    <h1>PRC</h1>
    <p>The People's Republic of China was born in 1949...</p>
</section>
```
section看起来像是有语义版的div，但实际的使用是用在一个专题性的版块，且通常带有一个标题。适合用于章节、标签切换效果的每一个tab容器或论文中有编号的地方，也可以用于网站主页中划分简介、新闻、联系信息等板块。section不是一个普通的容器元素，当为了样式布局时，建议使用div。当元素内容明确的列举在大纲时建议使用section。
谨记一点：section不是一个通用的纯容器标签。
#### （6）\<article>\</article > 在页面中表示一套结构完整且独立的内容部分
可以用来呈现论坛的一个帖子，杂志或报纸中的一篇文章，一篇博客，用户提交的评论内容，可互动的页面模块挂件等。
article标签规定独立的自包含内容。
一篇文章应有其自身的意义，应该有可能独立于站点的其余部分对其进行分发。
article元素的潜在来源：
- 论坛帖子 
- 报纸文章 
- 博客条目 
- 用户评论 
```
<article>
    <h1>Internet Explorer 9</h1>
    <p>Windows Internet Explorer 9（简称 IE9）于 2011 年 3 月 14 日发布.....</p>
</article>
```
#### （7）\<aside>\</aside> 标签定义其所处内容之外的内容（aside 的内容应该与附近的内容相关）
元素标签可以包含与当前页面或主要内容相关的引用、侧边栏、广告、nav元素组，以及其他类似的有别与主要内容的部分
- aside 的内容应该与 article 的内容相关。
- 被包含在article中作为主要内容的附属信息部分，其中的内容 以是与当前文章有关的引用、词汇列表等
- 在article之外使用，作为页面或站点全局的附属信息部分；最典型的形式是侧边栏(sidebar)，其中的内容可以是友情链接、附属导航或广告单元等。
```
<p>Me and my family visited The Epcot center this summer.</p>
<aside>
    <h4>Epcot Center</h4>
    The Epcot Center is a theme park in Disney World, Florida.
</aside>
```
#### （8）\<figure>\</figure>用于对元素进行组合。一般用于图片或视频
#### （9）\<figcaption>\</figcaption>figure的子元素 用于对figure的内容进行说明
"figcaption" 元素应该被置于 "figure" 元素的第一个或最后一个子元素的位置。
```
<figure>
    <figcaption>黄浦江上的的卢浦大桥</figcaption>
    <img src="shanghai_lupu_bridge.jpg" width="350" height="234" />
</figure>
```
#### （10）\<time>\</time>用来表现时间或日期
该元素能够以机器可读的方式对日期和时间进行编码，这样，举例说，用户代理能够把生日提醒或排定的事件添加到用户日程表中，搜索引擎也能够生成更智能的搜索结果。
```
<p>我们在每天早上 <time>9:00</time> 开始营业。</p>
<p>我在 <time datetime="2008-02-14">情人节</time> 有个约会。</p>
```
**属性：datatime**
- 值：datetime
规定日期 / 时间。否则，由元素的内容给定日期 / 时间。
pubdate：
- 值：pubdate
指示 <time> 元素中的日期 / 时间是文档（或 <article> 元素）的发布日期。
#### （11）\<datalist>\</datalist>选项列表。
与 input 元素配合使用，来定义 input 可能的值。datalist 及其选项不会被显示出来，它仅仅是合法的输入值列表。请使用 input 元素的 list 属性来绑定 datalist。
```
<input type="text" list="valList" />
<datalist id="valList">
    <option value="javascript">javascript</option>
    <option value="html">html</option>
    <option value="css">css</option>
</datalist>
```
#### （12）\<details>\</details>用于描述文档或文档某个部分的细节
- 该元素用于摘录引用等 应该与页面的主要内容区分开的其他内容
- open 属性默认展开
#### （13）\<summary>\</summary>details元素的标题
- open 属性默认展开
```
<details>
    <summary>HTML 5</summary>
    This document teaches you everything you have to learn about HTML 5.
</details>
```
#### （14）\<dialog>\</dialog>标签定义对话框或窗口
```
<dialog>
    <dt>老师</dt>
        <dd>2+2 等于？</dd>
    <dt>学生</dt>
        <dd>4</dd>
    <dt>老师</dt>
        <dd>答对了！</dd>
</dialog>

<table border="1">
    <tr>
        <th>一月 <dialog open>这是打开的对话窗口</dialog></th>
        <th>二月</th>
        <th>三月</th>
    </tr>
    <tr>
        <td>31</td>
        <td>28</td>
        <td>31</td>
    </tr>
</table>
```
有的浏览器需要加上open属性才能打开
#### （15）\<address>\</address>定义文章或页面作者的详细联系信息
- 如果address元素位于body元素内，则它表示文档联系信息。
- 如果address元素位于article元素内，则它表示文章的联系信息。
- address元素中的文本通常呈现为斜体。大多数浏览器会在 address元素前后添加折行。
- address标签不应该用于描述通讯地址，除非它是联系信息的一部分。
- address元素通常连同其他信息被包含在footer元素中。
```
<address>
    Written by <a href="mailto:webmaster@example.com">Donald Duck</a>.<br> 
    Visit us at:<br>
    Example.com<br>
    Box 564, Disneyland<br>
    USA
</address>
```
#### （16）\<mark>\</mark>需要标记的词或句子
mark标签定义带有记号的文本。请在需要突出显示文本时使用mark标签。
```
<p>
    Do not forget to buy <mark>milk</mark> today.
</p>
<p>
    Do not forget to buy <mark style="background:red">milk</mark> today.
</p>
```
#### （17）\<keygen>给表单添加一个公钥
标签规定用于表单的密钥对生成器字段。当提交表单时，私钥存储在本地，公钥发送到服务器。
```
<form action="http://www.baidu.com" method="get">
    用户: <input type="text" name="usr_name" />
    公钥: <keygen name="security" />
    <input type="submit" />
</form>
```
#### （18）\<progress>\</progress>定义进度条
```
<progress max="200" value="76">
        <span>76</span>%
</progress>
<progress></progress>
//当浏览器不兼容process的时候span里面的内容就会显示
```
结合 <progress> 标签与 JavaScript 一同使用，来显示任务的进度。
注释：<progress> 标签不适合用来表示度量衡（例如，磁盘空间使用情况或查询结果）。如需表示度量衡，请使用 <meter> 标签代替。
**属性：max**
- 值：数字
规定任务一共需要多少工作。

**属性：value**
- 值：数字
规定已经完成多少任务。
### 3. 语义化标签兼容低版本浏览器
IE5.5~8下对于不支持的标签会遇到以下问题
1. 无法通过元素选择器选择匹配相应的标签并应用样式规则；
2. 通过ID、类名等方式匹配相应的标签并应用样式规则，或使用style特性嵌入样式规则，均有效。但效果与正常效果相距甚远；

3. 标签的默认样式与W3C草案的不同；
4. 对于如progress、meter、details和canvas等自带特定UI形式和编程接口API的元素，无法渲染出相同的UI形式和向外提供编程接口API；
5. 对于如output、keygen等通过form特性指向所属表单元素的API不给予支持。

注意：
1. IE5.5~8下使用document.getElementsByTagName或document.getElementById等方法可获取DOM树中的所有标签元素，即使浏览器不支持这些标签元素（通过Object.prototype.toString.call方法获取不支持的标签元素类型，得到结果为[object HTMLUnknownElement]）
2. IE9和其他现代浏览器对于不支持的标签，也可以通过元素选择器匹配相应的标签，同时样式规则的应用也与正常的无异。

**解决方案**
注意，这里的解决方案仅仅只能解决上一小节所罗列问题的1、2和3。
**方案一：** 用js解决，用js的createElement创建这些元素
首先我们使用js进行标签的创建，为HTML文件创建我们需要的这几个HTML5标签。
```
<script>
    document.createElement('header');
    document.createElement('nav');
    document.createElement('article');
    document.createElement('footer');
</script>
```
接下来，我们需要使用css进行这几个HTML5标签的样式控制。这是因为，通过这种方法创建的新标签，默认是行内元素。因此需要添加如下代码：
```
<style>
article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary{
    display: block;
}
</style>
```
对于代码位置，我们需要注意，要将script标签放置到head中，而不是body的后面，这是因为，浏览器从上到下进行代码的执行与解析，在已经渲染之后再执行js就没有任何意义和价值了。
**方案二：** 用html5shiv（谷歌出品）包
```
<script src="html5shiv.js"></script>
```
或者
```
<!--[if lt IE9]> 
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```
### 4. 新增表单控件
#### （1） 新的输入型控件
- email：电子邮箱文本框，跟普通的没什么区别
当输入不是邮箱的时候，验证通不过；移动端的键盘会有变化
- tel：电话号码
- url：网页的URL
- search：搜索引擎
chrome下输入文字后，会多出一个关闭的X
- range：特定范围内的数值选择器
min、max、step( 步数 )
- number：只能包含数字的输入框
- color：颜色选择器
- datetime：显示完整日期
- datetime-local：显示完整日期，不含时区
- time：显示时间，不含时区
- date：显示日期
- week：显示周
- month：显示月
```
<form action="">
    邮箱：<input type="email">
    <br>
    电话：<input type="tel">
    <br>
    网址：<input type="url">
    <br>
    搜素：<input type="search">
    <br>
    数值选择器：<input type="range">
    <br>
    数值选择器：<input type="range" step="2" min="0" max="10" value="2">
    <br>
    数字：<input type="number">
    <br>
    颜色：<input type="color">
    <br>
    日期：<input type="datetime">
    <br>
    日期：<input type="datetime-local">
    <br>
    日期：<input type="time">
    <br>
    日期：<input type="date">
    <br>
    日期：<input type="week">
    <br>
    日期：<input type="month">
    <br>

    <input type="submit">
</form>
```
### （2）新增表单控件属性（新的表单特性和函数）
- placeholder：输入框提示信息
例子：微博的密码框提示
- autocomplete：是否保存用户输入值
默认为on，关闭提示选择off
- autofocus：指定表单获取输入焦点
- list和datalist：为输入框构造一个选择列表
list值为datalist标签的id
- required：此项必填，不能为空
- Pattern：正则验证  pattern="\d{1,5}“
- Formaction：在submit里定义提交地址
```
<form action="www.baidu.com">
    placeholder:输入框提示信息 <br>
    <input type="text" placeholder="请输入内容">
    <br>
    <input type="password" placeholder="请输入内容">
    <br>

    autocomplete:是否保存用户输入值 <br>
    <input type="text" placeholder="请输入内容" autocomplete="on">
    <br>
    <input type="text" placeholder="请输入内容" autocomplete="off">
    <br>

    autofocus:指定表单获取输入焦点 <br>
    <input type="text">
    <br>
    <input type="text" autofocus>
    <br>

    list和datalist:为输入框构造一个选择列表 <br>
    <input type="text" list="valList" />
    <datalist id="valList">
        <option value="javascript">javascript</option>
        <option value="html">html</option>
        <option value="css">css</option>
    </datalist>
    <br>

    required:此项必填，不能为空 <br>
    <input type="text" required>
    <br>

    Pattern:正则验证 <br>
    <input type="text" pattern="\d{1,5}">
    <br>

    Formaction:在submit里定义提交地址
    <input type="submit" value="提交">
    <input type="submit" value="保存至草稿箱" formaction="www.google.com">
    </form>
```
### （3）表单验证
#### Invalid事件：验证反馈 
input.addEventListener('invalid',fn,false)
- 阻止默认验证：ev.preventDefault()
#### validity对象
通过下面的valid可以查看验证是否通过，如果八种验证都通过返回true，一种验证失败返回false
- oText.addEventListener("invalid",fn1,false);
- ev.preventDefault()
- valueMissing  :  输入值为空时
- typeMismatch :  控件值与预期类型不匹配
- patternMismatch  :  输入值不满足pattern正则
- tooLong  :  超过maxLength最大限制
- rangeUnderflow : 验证的range最小值
- rangeOverflow：验证的range最大值
- stepMismatch: 验证range 的当前值 是否符合min、max及step的规则
- customError 不符合自定义验证
setCustomValidity(); 自定义验证
#### formnovalidate属性：关闭验证
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Title</title>
</head>
<body>
    <form action="">
        <input type="email" required id="text" pattern="\d{1,5}">
        <input type="submit">
        <input type="submit" value="保存至草稿箱" formaction="www.google.com"formnovalidate >
    </form>
    <script>
        var oText = document.getElementById('text');
        oText.addEventListener('invalid', fn, false);
        oText.oninput = function(){
            if (this.value == "敏感粗"){
                this.setCustomValidity("请不要输入敏感词");
            } else{
                this.setCustomValidity("");
            }
        }
        function fn(ev){
            alert('输入值是否为空：' + this.validity.valueMissing);
//            当输入值为空返回true，输入值不为空返回false
            alert('控件值与预期类型是否匹配：' + this.validity.typeMismatch);
//            当输入类型和要求类型不一致返回ture
            alert('输入值是否满足pattern正则：' + this.validity.patternMismatch);
//            当用户输入的内容和预期的正则要求不匹配，返回true
            alert('是否超过maxLength最大限制：' + this.validity.tooLong);
//            当用户输入的长度超过了最大长度的限制返回true
            alert('验证的range最小值：' + this.validity.rangeUnderflow);
            alert('验证的range最大值：' + this.validity.rangeOverflow);
            alert('验证range 的当前值 是否符合min、max及step的规则：' + this.validity.stepMismatch);
            alert('是否符合自定义验证：' + this.validity.customError);
//            不符合自定义验证返回true

            ev.preventDefault();
        }
    </script>
</body>
</html>
```
## 第二课 HTML5的新特性
### 1. 新的选择器
- querySelector
- querySelectorAll
- getElementsByClassName
document.querySelector(); 返回的是符合条件的**一个**JS对象，若符合的有一个以上，那返回的对象是这些符合JS对象中的第一个JS对象。
document.querySelectorAll();返回的是符合条件的JS对象数组，诺只有一个 那就是一个JS对象。
document.getElementsByClassName返回的是类名匹配的一组对象。
HTML代码：
```
<div id="div1" class="box">div1</div>
    <div class="box" title="hello">div2</div>
    <div class="box" title="wrold">div3</div>
```
JS代码：
```
document.querySelector('#div1');
//获取id为div1的元素
document.querySelector('.box');
 //只获取第一个class为box的元素
document.querySelector('[title = hello]');
 //获取title属性为hello的元素
document.querySelector('[title = hello]');
 //获取有title属性的元素
            
document.querySelectorAll('.box');
//选择一组class为box的元素
document.getElementsByClassName('box');
//选择一组class为box的元素
```
### 2. 获取class列表
- classList 属性返回元素的类名，作为 DOMTokenList 对象。
- 该属性用于在元素中添加，移除及切换 CSS 类。
- classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。

（1）属性
- length：返回类列表中类的数量，只读

（2）方法
- add(class1, class2, ...)
在元素中添加一个或多个类名。如果指定的类名已存在，则不会添加
- contains(class)
返回布尔值，判断指定的类名是否存在。元素包已经包含了该类名返回true，元素中不存在该类名返回false。
- item(index)
支持一个参数，为类名的索引，返回对应的类名。索引值从 0 开始。如果索引值在区间范围外则返回 null
- remove(class1, class2, ...)
移除元素中一个或多个类名。移除不存在的类名，不会报错。
- toggle(class, true|false)
在元素中切换类名。
第一个参数为要在元素中移除的类名，并返回 false。 
如果该类名不存在则会在元素中添加类名，并返回 true。
第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。例如：
移除一个 class: element.classList.toggle("classToRemove", false); 
添加一个 class: element.classList.toggle("classToAdd", true);
注意： Internet Explorer 或 Opera 12 及其更早版本不支持第二个参数。
```
var oDiv = document.getElementById('div1');
alert(oDiv.classList.item(2));
//返回第3个class名
oDiv.classList.add('box4');
//给元素添加class名为box4的class
oDiv.classList.remove('box2');
//移出元素的box2类名
oDiv.classList.toggle('box2');
//若元素类名原本有box2则删除，若原本没有就添加
```
### 3. JSON的新方法
#### （1）parse() 
##### 语法：JSON.parse(text[, reviver])
##### 参数说明：
- text:必需， 一个有效的并且严格的JSON字符串。字符串中的属性要严格的加上引号。
- reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。
```
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```
#### （2）stringify()
##### 语法：JSON.stringify(value[, replacer[, space]])
##### 参数说明：
- value:必需， 一个有效的 JSON 字符串。
- replacer:可选。用于转换结果的函数或数组。
如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。
如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
- space:可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 有可以使用非数字，如：\t。
##### 返回值：
返回包含 JSON 文本的字符串。会自动的把双引号加上。
```
var str = {name:"luwei", age:"22"};
str_pretty1 = JSON.stringify(str); 
//str_pretty1 = '{"name":"luwei", "age":"22"}'
```
### 4. data自定义属性
HTML5 增加了一项新功能是自定义数据属性，也就是data-自定义属性。在HTML5中我们可以使用以data-为前缀来设置我们需要的自定义属性，来进行一些数据的存放。使用data-可以解决自定义属性混乱无管理的现状。
#### （1）HTML5 Dataset 存储的例子
为一个元素分配data属性存储数据，例如这是一个span元素，它的内容是一首音乐的名称，我们为其HTML标签里直接预置这首歌的更多信息，在HTML源码上看起来可以这样来写：
```
<span id="music-latch" class="musique"
data-date="2013"
data-genre="Electronic"
data-album="Settle (Deluxe)"
data-artist="Disclosure"
data-composer="Howard Lawrence & Guy Lawrence">
Latch (feat. Sam Smith)
</span>
```
这样，我们就很简单的为这首歌在span标签里直接内嵌了其专辑、艺术家和流派信息。
再举一个例子，比如说一个本地化翻译的嵌入：
```
<h2 id="food-pkd" class="food"
data-en="Peking Duck"
data-available
data-ja="北京ダック"
data-fr="Canard laqué de Pékin"
data-de="Pekingente">
北京烤鸭
</h2>
```
这样一来，在不改变网页外观的情况下，我们可以在设定机器翻译的同时检测data-XX，来人工提供更准确精准的翻译。
其中data-available没有值，允许空值，例如在这个情况下，它仅代表该食物可以订购，所以不需要有值。
#### （2）利用 dataset API 存取 dataset
通过.dataset API，我们可以更方便的获取元素的所有data字段，并以对象的方式，方便存取和遍历。我们在访问data时，就不需要"data-"关键词了，直接利用.dataset.name就可以访问到。所做出的任何更改，都是可以实时反映到元素data属性上的。如果涉及到连字符"-"，可以采取驼峰化的方法来存取：
```
<body>
    <div id="div1" data-name="luwei" data-name-first="lu"></div>
</body>
<script>
    var oDiv = document.getElementById('div1');
    alert(oDiv.dataset.name);
    oDiv.dataset.nameFirst = 'Wang';
</script>
```
### 5. 延迟加载JS
- JS的加载会影响后面的内容加载
很多浏览器都采用了并行加载JS，但还是会影响其他内容
- Html5的defer和async
defer : 延迟加载，会按顺序执行，在onload执行前被触发
async : 异步加载，加载完就触发，有顺序问题
```
<scriptsrc="file.js" defer></script>
<scriptsrc="file.js" async></script>  
```
- Labjs库
