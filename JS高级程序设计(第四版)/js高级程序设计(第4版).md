# JS高级程序设设计(第4版)

### 第1章 js的介绍

##### 1.2.2 DOM

```
全称：文档对象模型（Document Object Model）
DOM Level1 主要是实现了映射文档结构
DOM Level2 实现了鼠标和用户界面事件，遍历等操作，以及CSS的支持。
DOM Level3 实现了文档的加载和保存方式，还有验证文档的方式。
```

##### 1.2.3 BOM

```
全称：浏览器对象模型。用于支持访问和操作浏览器的窗口。
几个重要的对象：
navigator:提供关于浏览器的详尽信息
location：提供浏览器加载页面的详尽信息
screen：提供关于用户屏幕分辨率的详尽信息
performance:提供浏览器内存占用、导航行为和时间统计的详尽信息
以及cookie等
```

### 第2章 在html中使用js

```
<script>标签属性
type属性:
默认是text/javascript，当改为module时,就是使用的es6的模块，可以使用关键字：import和export
src属性：
用于引用外部js文件
defer 和async属性：
前者表示，下载但是推迟执行，推迟的脚步按照顺序执行
后者表示异步加载，不保证异步加载的顺序。
```

### 第3章 语言基础

##### 3.1.2 标识符

```
标识符可以以_和$开头
```

##### 3.3.1 var关键词

```
var声明提升：
function foo(){
	console.log(age);
	var age =1;
}
foo()  //undefined
var 声明的变量会将声明提升到最近作用域的顶部(只有全局作用域和函数作用域)
相当于：
function foo(){
	var age;
	console.log(age);
	age =1;
}
var可以在作用域内反复声明
```

##### 3.3.2 let和const声明

```
JS中，if,while,for是没有块作用域的，但是如果用let和const，就会出现块作用域
let不可以在用一个作用域内重复声明
暂时性死亡：
let声明的变量不会出现变量提升，而且必须先声明，才能使用。
let声明的变量不会成为window对象的成员。
for(let i=0;i<5;i++){
	setTimeout(()=>console.log(i))
}
输出：0,1,2,3,4
分析：首先setTimeout是异步函数，所以必然会在同步函数执行结束以后执行，如果i是var类型，
那么始终指向一个变量i，所以最后的输出是：5，5,5,5,5；但是如果for里面是let时，引擎就会创建n个对象，所以每个i指向的都是不同对象。但是const也可以进行for循环，但是只能for-in 和 for-of
```

###### 3.4.1 数据类型

```
原始数据类型(非常6+1)：Undefined、Null、Boolean、Number、String和Symbol(符号),复杂类型Object
typeof 原始数据类型结果(非常6+1)：
undefined、string、number、boolean、function、symbol、object(包括null和Object类型)
typeof 未赋值的变量或者是未声明的变量，返回结果都是undefined
```

##### 3.4.5 Number类型

```
0/0   结果是NaN
但是 2/0   结果是Infinity
NaN==Nan   false
判断NaN函数：isNaN(),会先转换，然后再进行判断。
3个转换函数：Number(),parseInt(),parseFloat(),后两个用于string转number
Number():
对于字符串，""为0，"001"则为1，"1jfie"则为NaN,
undefined为NaN，但是null为0，对象则是调用valueOf()和toString()方法
+param，转换规则同Number()

parseInt()和parseFloat()适用于字符串转Number，不同的是，"1223fjeig"会匹配到第一个非数字类型停止。
```

##### 3.4.6 String类型

```
类型转换，String()函数比toString()方法更全面，因为对于null和undefined也可以转换为字符串
还有一个中方法:""+param也可以转换
```

##### 3.4.6 模板字面量标签函数

```
模板字面量标签函数可以接收字符串和字符串插值的输入，第一个参数是原始字符串组，后面将以此解析插值。
注意，原始字符串数组的第一个是`到$之间的值，所以很可能是空字符串，而最后一个元素是}到`之间的值，所以也可能出现空字符串
举例:
function simpleTag(strings,...value){
	console.log(strings);
}
var a="x";
var b="y";
simpleTag`this is ${x} and ${y} and z`  //输出:["this is "," and "," and z"]
simpleTag`${x} and ${y}`   //输出:[""," and ",""]


用模板字面量标签函数实现字符串拼接：
var a =6
var b = 9
function translate(strings,...value){
    return strings[0] + value.map((e,i)=>`${e}${strings[i+1]}`).join("")
}
var res1 = `${a} + ${b} =${a+b}`
var res2 = translate`${a} + ${b} = ${a+b}`
console.log(res1)	//6 + 9 = 15
console.log(res2) 	//6 + 9 = 15

防转置标签函数，类似于python的r"\n"
console.log(String.raw`ni\nhao`)   //ni\nhao
注意点，只能使用``,而且对${}无效，依旧会被转化为对应的值
```

##### 3.4.7 Symbol类型

```
P44-55页，回头再来看，不知道是啥
```

##### 3.4.8 Object类型

```
Object是所有对象的基类，拥有以下属性：
constructor:用于创建当前对象的函数
hasOwnProperty("name"):判断当前对象是否含有 name 属性
isPrototypeof(object):用于判断当前对象是否为另一个对象的原型
propertyIsEnumerable(propertyName):用于判断给定的属性是否可以使用
toLocaleString():返回对象的字符串表示
toString():返回对象的字符串表示
valueof():返回对象的表达形式，可能是Number或者是string等。
```

##### 3.5.1 ++和--

```
自加和自减不仅可以用在整数上面，也可以用在其他类型上面
方法是，先把其他类型转化为Number类型
对于小数，实现的是+-1
```

##### 3.5.1 位操作

```
P59-64
```

##### 3.5.2 布尔操作符

```
!!可以实现将变量变为boolean类型
当&&和||操作两个非boolean类型时
&&：
	如果有null undefined和NaN，则直接返回null undefined NaN
	如果两个都是对象，则返回第二个。
||:
	如果两个都是对象，则返回第一个。
	只有2个都是null undefined NaN,才会返回null undefined NaN
```

##### 3.5.3 其他运算

```
**幂运算，和python的一样，但这个是es7加入的。
字符比较时，如果有一个是数字，那么就是转为数字然后进行比较，也就是说，数字的优先权大于字符串，除了a+b
== 和 ===
==：
	null和undefined是相等的，但是不能转为其他类型，所以和数字相比是错的
	NaN和任何相比都是false
===:
	null和undefined是不全等的
	"55"和55也是不全等的
```

##### 3.6.5 for-in和for-of语句

```
for-in 用于遍历对象的属性
for-of 用于遍历可迭代对象
for(const item in obj)
for(const item in [1,2,3])
```

##### 3.6.6 标签语句

```
使用场景，当使用二重循环时，如果要提前退出整个循环，就可以使用标签语句，如：
outermost:
for(let i=0;i<10;i++){
	for(let j=0;j<10;j++){
		if(i==5 && j==5)
			break outermost;
	}
}
```

##### 3.6.7 with

```
使用方法：
with(objectName){
	let a = a  //a是objectName的属性。 
}
作用：简化了写法，但是不推荐
```

##### 3.6.10 switch

```
switch(i){
	case 1:
	console.log("1")
	break;
	default:
	console.log("other")
}
```

### 第4章 变量、作用域和内存

```
typeof判断数据类型  typeof value
instanceof判断原型链	person instanceof object
```

##### 4.2 执行上下文

```
每个环境都有一个变量对象，浏览器最外层是window对象
作用域链，把所有变量对象链起来。
```

### 第5章 基本引用类型

##### 5.1 Date

```
 
```

### 第8章 对象、类和面向对象编程

#### 1 理解对象

##### 1.1 属性的类型

```
2类，数据属性和方法属性
```

#### 2 构造对象

##### 2.2 工厂模式

```
function(){
	let o = new Object();
	return o;
}
缺点：没法确定对象标识(对象类型)
```

##### 2.3 构造函数模式

```
function Person(name){
	this.name =name;
}
let person = new Persion("bb")
好处：解决了工厂模式对象标识不明确的缺点
缺点：对于公共方法，没法共用。
```

##### 2.4 原型模式

```
原型模式解决了属性、方法共用的问题。上面2个模式定义下，属性和方法都是在实例中创建，所以都不能共用，所以需要在原型对象中创建共用的方法和属性。
function Person{}
Person.prototpye.name="person";
let person = new Person()
```







