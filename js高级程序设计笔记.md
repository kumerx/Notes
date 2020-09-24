# JavaScript高级程序设计笔记

## 第3章

### 3.1 语法

#### 3.1.2 标识符

1. 可以_或者$开头
2. 一般采用小驼峰格式 

#### 3.1.4 严格模式

启用严格模式：任意地方添加代码：“use strict”

### 3.3 变量

通过var定义的变量，会成为该环境下的局部变量，没有加var的，就是全局变量

### 3.4 数据类型

5种简单数据类型：Undefined Null Boolean Number String +1个复杂数据类型：Object(function)

#### 3.4.1 typeof

用于上述**简单类型判断**，特殊的： **typeof 函数  -> function	typeof null    -> object** 

#### 3.4.2 Undefined类型

只用一个字面量：undefined，在var 没有初始化的时候就是undefined 值 

#### 3.4.3 Null类型

也只有一个字面量：null，因为type null == object,所以一般用来保存对象的变量初始化用null

#### 3.4.4 Boolean类型

2个字面量：true和false

5个类型与Boolean之间的转化：

| 数据类型  | true     |     false      |
| --------- | -------- | :------------: |
| String    | 非空     | “”（空字符串） |
| Number    | 非0      |   **0和NaN**   |
| Object    | 任何对象 |      null      |
| Undefined |          |   undefined    |

#### 3.4.5 Number类型 IEEE754规则

浮点数：双精度的,最高精度17位，**对于var a=1.0，会被判定为a=1,作为整数**

**正负无穷**：Infinity 和-Infinity                **判断方式**：isFinite()

**NaN** 不能用NaN == NaN 来判断是不是NaN  NaN参与的运算结果也是NaN

**判断方式**： isNaN()  对于String和Boolean类型，会进行转化，然后再判断

1. NaN   true
2. "10"    false
3.  “blue”   true
4. true    false
5. object 先调用valueOf()方法，再调用toString()方法然后再同上判断

**数值转化**：Number()用于所有类型，parseInt()和parseFloat()用于字符串的转化

**Number()的用法**

| 类型      | 转化的值                                                     |
| --------- | ------------------------------------------------------------ |
| Boolean   | true->1 false->0                                             |
| Null      | 0                                                            |
| Undefined | NaN                                                          |
| String    | " 1"->1, "1.1"->1.1, ""->0, "0xa"->10, **16进制可以，但是8进制不可以**  **"ni123"->NaN** 也会忽略前面的空格 |
| Object    | 先调用valueOf()方法，然后再调用toString()方法                |

与Number()相比，parseInt()可以解析下面情况:

**parseInt("124a")->124    parseInt("")->NaN   parseInt("012",8)->18**  对2个函数来说，“a123”都没法解析成123

**parseFloat()只能解析10进制的小数，也可能会转化为整数**

#### 3.4.6 String类型

字符串不可修改，只能销毁重新创建，s.length属性返回字符串长度

**转化为字符串**：

toString（）和String（）函数，其中num.toString(2)可以指定基数，**但是不能转化null和undefined**，所以可以使用String（）函数，String函数首先就是调用toString（）函数，然后再处理null和underfined

**还有一种方法**：num+“”   加上空字符串

#### 3.4.7 Object类型

Object所拥有的属性和方法：
toLocaleString():返回对象的字符串表示，与执行环境相对应

toString(): 返回对象的字符串表示形式

valueOf()：返回数值形式，可能是boolean或者是number形式

### 3.5 操作符

!使用于任何类型，null undefined object 0 "" NaN

与 && 和  或|| 都具有**短路性**，实用于任何类型，**但有一个不是boolean类型，返回值不一定是boolean类型**

| 第一个数              | 第二个数 | 返回值   |
| --------------------- | -------- | -------- |
| object                |          | 第二个数 |
| true                  | object   | 第二个数 |
| object                | object   | 第二个数 |
| null / undefined /NaN |          | null/    |

逻辑||也同样有上述规则

| 第一个数           | 第二个数 | 返回值   |
| ------------------ | -------- | -------- |
| object             |          | 第一个数 |
| false              |          | 第二个数 |
| object             | objcet   | 第一个数 |
| null/NaN/undefined | null/    | null/    |

**列子：var myObject = preferredObject || backObject **

如果preferredObject是对象，则付给myObject, 否则，就把backObject赋值给myObject

#### 3.5.4 乘性操作符

首先是调用Number()把非数值的转化为数值，所以“a”*2,不是“aa”，而是NaN

**正常情况下没啥问题，也就跟无穷的数操作时需要格外注意下，参考书上P47页**

#### 3.5.5 加法注意事项

对于有一个操作数是字符串，则另一个数调用valueOf()   toString() 和String()方法，如果是数值计算，则调用Number（）方法

#### 3.5.6 关系操作符

如果有一个是数值，则需要转化为数值再比较，这说明，在这里，**数值的优先级大于字符串**

其次，NaN与任何数值比较，结果都是false

**总结下来就是，除了加法，其他情况，数值的优先级要大于字符串 **

**相等和全等**

相等 == 指的是，先转化类型，再比较，也是数值优先，然后NaN怎么都是false，对象相等比较，指的是：是不是指向同一个对象

全等 === 不进行转换，直接比较，所以要求类型也必须是一样的

### 3.7 函数

#### 3.7.1 参数

可以用arguments对象来接收不定参数，然后使用[]访问。arguments.length 来确定参数个数

function sum(arg1){}   在这个例子中，arguments[0]的值和arg1保持同步，但是它们的存储空间是不同的。

**JS中函数没有重载，只会覆盖**

## 第4章

### 4.1 基本类型和引用类型的值

#### 4.1.3 传递参数

在JS中，只有传值这一种方法，即使是引用类型，也是传递的对象的地址，此时，形参的改动不会影响到实参，这体现在，形参指向了别的，实参指向原来的。

#### 4.1.4 检测类型

**检测基本类型，用typeof，检测对象属于什么类型时，用instanceof**

person instanceof object   -> true

### 4.2 执行环境和作用域

执行环境------关联一个变量对象（保存环境的变量和函数）------------作用域链（作用是决定哪些变量是能访问到的，包括外部环境的，是一系类变量对象链起来的） **函数都有自己的执行环境   对象是 活动对象**  

#### 4.2.1 作用域链 以函数为例

前端：当前所在环境的对象，及活动对象，包含arguments对象。（try-catch  with会在前端临时变量对象）

链接外部环境变量对象，直到最后到全局变量对象

**作用域分类：局部作用域，外部作用域，全局作用域**

**js没有块作用域，所有的变量都会被添加到当前环境的变量对象里面，如: for(var i=1;i++;i<3) ;  结束后，i的值依旧是3，不会销毁。**

### 4.3 垃圾收集

#### 4.3.1 标记清除

原理就是，加上（去除）标记表明是在运行中的变量，然后相反的标记则表示不再运行的变量，可以删除

#### 4.3.2 引用计数

原理：跟踪每个值被引用的次数（引用类型）

**存在的问题：循环引用P79页，回头再看**

## 第5章 引用类型

### 5.1 object类型

#### 5.1.1 创建对象的两种方式:

1. new + **对象的构造函数**，如：var person =  new Object();
2. 使用**对象字面量**，如：var person = { age : 29, name="xia"};

#### 5.1.2 访问对象属性

1. person.name 
2. person["name"]或者 var s= "name"; person[s]

### 5.5 Function类型

函数其实也是对象，所以函数可以按下列方式定义

1. function f(a,b){return a+b}     **这种函数声明，会提到执行环境前面**
2. var f = function(a,b){return a+b};

#### 5.5.4 函数内部属性  arguments和this

arguments拥有属性：callee，用于指向函数的对象。用于递归

caller属性指向引用的函数

**this指向的是环境变量对象**  函数所在的**对象**环境，比如在全局环境，也可能在一个对象里面

#### 5.5.5 函数的属性和方法

length属性，返回函数参数个数

## 第6章 面向对象程序设计

### 6.1 创建对象

1. var person = new Object();
2. var person = {name:"xia"};    对象字面量

#### 6.1.1 属性类型 数据属性  访问器属性

数据属性：就是设置对象 数据属性 ：Object.defineProperty(person,"name",{value:"xia"})

访问器属性：相当于重新设置一个属性year,然后给year属性设置getter,setter方法，然后通过person.year访问

Object.defineProperty(person ,"year",{get:function(){retrun this._year},})

### 对象学习

##### 1 Array对象

```
var arr = [1,2]
判断长度：arr.length   = 2
	arr.length这个词可以更改，arr.length = 1,那么2就会被移除
判断是不是数组:Array.isArray(arr)
Array转字符串：
	arr.toString()
	arr.join("||")   用||来作为间隔符
增删，像栈一样去战斗
	arr.push("red"),arr.pop()
像队列一样去战斗:
	arr.shift()   第一项出去 arr.unshift("red")从前端添加

```

1.1 arr的sort()方法

```
arr.sort()会在本来的数组上改变。
arr.sort()方法会调用每一项的toString()方法，然后进行比较，所以是字符串的比较，哪怕是数字，也是字符串比较
sort()可接受一个比较函数，如果返回正数，那么value1就排在value2后面（就交换）。
function compare(value1,value2){
	if(value1<value2)
		return -1;
	else{
		return 1;
	}
}
function compare(value1,value2){
	return value1 - value2;
}正序排列 //通常考虑返回负值的情况，因为负值就是不变化，就可以判断出到底时怎么排序的

```



















