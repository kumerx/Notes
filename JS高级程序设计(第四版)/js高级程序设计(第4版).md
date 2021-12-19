# JS高级程序设设计(第4版)

## 第1章 js的介绍

#### 1.2.2 DOM

```
全称：文档对象模型（Document Object Model）
DOM Level1 主要是实现了映射文档结构
DOM Level2 实现了鼠标和用户界面事件，遍历等操作，以及CSS的支持。
DOM Level3 实现了文档的加载和保存方式，还有验证文档的方式。
```

#### 1.2.3 BOM

```
全称：浏览器对象模型。用于支持访问和操作浏览器的窗口。
几个重要的对象：
navigator:提供关于浏览器的详尽信息
location：提供浏览器加载页面的详尽信息
screen：提供关于用户屏幕分辨率的详尽信息
performance:提供浏览器内存占用、导航行为和时间统计的详尽信息
以及cookie等
```

## 第2章 在html中使用js

```
<script>标签属性
type属性:
默认是text/javascript，当改为module时,就是使用的es6的模块，可以使用关键字：import和export

src属性：
用于引用外部js文件

defer 和 async属性：
都是用于延迟脚本的加载和执行;
async相对于同步的script脚本是异步执行，如果有几个async脚本时，谁先加载好谁先执行；通常在load事件以前，但是无法确定在DOMContentLoaded前后；
defer相当于把该脚本放到了同步脚本的最后执行，且在DOMContentLoad之前执行，但如果async先加载好，那么也是async的脚本先执行；理论上多个defer脚本应该是按顺序执行，且在DOMContentLoad之前，但真实情况不一定这样，所以建议只有一个defer脚本。
```

## 第3章 语言基础

#### 3.1.2 标识符

```
标识符可以以_和$开头
一般采用小驼峰格式  myCar
```

#### 3.1.4 严格模式

启用严格模式：任意地方添加代码：“use strict”

```js
function f(){
    "use strict";
}
```

#### 3.3.1 var关键词

1. 在全局作用下，var声明的变量会作为window的属性；未用var修饰的变量也会添加为window的属性。

```js
var name ='xxx';
name === window.name
funct f(){
	age = 18;//age === window.age
}
```

2. var声明提升，值仍然为undefined：

```js
function foo(){
	console.log(age);//undefined
	var age =1;
}

//var 声明的变量会将声明提升到最近作用域的顶部(全局作用域和函数作用域)
//var可以在作用域内反复声明
```

#### 3.3.2 let和const

##### let特性

* if,while,for中使用let，会添加块作用域；
* let不可以在用一个作用域内重复声明；
* 暂时性死亡：let声明的变量不会出现变量提升，且先声明再使用；全局作用下，let声明的变量不会成为window对象的成员；
* for(let i=0;i<5;i++)中，会为每个迭代循环声明一个新的迭代变量；

##### const特性

* 与let特性基本相同；
* const申明变量的时候必须赋初试值；
* const声明的对象不可再引用/赋值其他对象；
* const 不能用在for(const i=0;i<3;i++)中，但是可以用在for-in和for-of中。

### 3.4 数据类型

#### 3.4.1 数据类型

```js
原始数据类型(6+1)：Undefined、Null、Boolean、Number、String和Symbol(符号),复杂类型Object，后续还增加了BigInt。
```

##### typeof

```js
typeof 原始数据类型结果(6+1)：
"undefined"、"string"、"number"、"boolean"、"function"、"symbol"、"object"(包括null和Object类型)
typeof 未赋值的变量或者是未声明的变量，返回结果都是"undefined"
```

##### 类型转换

```
类型之间转换，基本类型（6+2），但是通常只有4种类型：Number, Boolean, String, Object参与转换，顶多加一个Undefined。 
```

#### 3.4.4 Boolean类型

4种类型与Boolean之间的转化：

| 数据类型  |        true        |     false      |
| --------- | :----------------: | :------------: |
| String    |        非空        | “”（空字符串） |
| Number    |        非0         |   **0和NaN**   |
| Object    | 正常对象（包括{}） |      null      |
| Undefined |                    |   undefined    |

#### 3.4.5 Number类型

##### IEEE754规则

Number类型采用IEEE754规则（64位精度）：**符号位（1）+指数为（11）+尾数（52，加一位隐藏位）**

精度53位，能表示的确切的整数范围：`-2 ^ 53 + 1 ~ 2 ^ 53 - 1 `, 浮点数的最高精度为17位。详情见图IEEE754.png

##### 几个特殊值

* Number.MAX_VALUE: 最大正数
* Number.MIN_VALUE: 最小正数
* Number.MAX_SAFE_INTEGER: 最大精确整数
* Number.MIN_SAFE_INTEGER: 最小精确整数
* Infinity: 无穷大数  可用isFinity()来判断是否是有限数
* NAN：Not a Number
  1. NaN参与的任何运算都是NaN
  2. `0/0 => NaN` 但 `2/0 => Infinity`  `Infinity * 0 => NaN` `Infinity / Infinity => NaN`
  3. NaN == NaN false, 只能用`isNaN()`来判断是否是NaN，原理：先将参数转为Number类型，再判断，所以`isNaN('blue') => true`

##### 数值转换

3个转换函数：Number(),parseInt(),parseFloat(),后两个用于string转number，细节：**忽略最前面的n个空格，且整数的浮点数会自动转为整数，例如1.0会自动转为1**

**Number()**

| 数据类型  | 转化规则                                                     |
| --------- | ------------------------------------------------------------ |
| Undefined | NaN                                                          |
| String    | ""为0，包含数字的转为数字(包括0xf)，其他情况NaN,如:"11abc"   |
| Boolean   | true为1，false为0                                            |
| Object    | null为0，其他调用valueOf()，为NaN，则调用toString()方法，然后参照上面规则 |

**parseInt()**

* 匹配到最开始出现`非数字`类型的字符，如果`字符串为""`,则返回`NaN`
* 接收第二个参数，Number n，表示以n进制解析字符串。

```
parseInt("") => NaN
parseInt(" 123.4abc") => 123
parseInt("11",2) => 3
```

**parseFloat()**

* 同parseInt()第一条
* 不接受第二个参数，而且不能识别0x的16进制数。

#### 3.4.6a String类型

##### 转义字符

* \n => 空格
* \ \  => \
* \unnnn => unicode码，n为16进制 

##### 不可变性(immutable)

```js
let str = 'abc';
str[2] = 'd' //修改无效 
str => 'abc'
```

##### 类型转换

3个方法：o.toString(), String(), 拼接空字符(""+str)

**toString()与String()的区别**

* toString(Int n)，当针对Number类型时，可传入参数n表示转化的进制
* toString()不可用于Undefined和Null，但是String()可以，转为"undefined"和"null"

#### 3.4.6b 模板字面量

##### 模板字符串和字符串拼接

```js
//可换行定义字符串
let str=`first line
second line`

//使用插值表达式进行字符串拼接,插值表达式里面的变量会调用.toString()方法
let number=5
let str = `${number} * ${number} = ${number*number}`
```

##### 模板字面量标签函数

模板字面量标签函数用于对模板字符串进行更详细的操作，函数参数：

```js
//strings 为模板字符串中的字符串常量，templateArguments为字符串变量
function f(strings,...templateArguments){}
//调用方式：
const a = 3;
const b = 5;
f`${a}+${b} = ${a+b}`
//f参数情况
// strings: ["","+"," = "]
//templateArguments: [3,5,15]

//注意，如果模板字符串一开始为变量，则strings第一项为空字符串""
```

#### 3.4.7 Symbol类型

```
P44-55页，回头再来看
```

#### 3.4.8 Object类型

```
Object是所有对象的基类，每个实例都拥有以下属性：

constructor:指向用于创建当前对象的函数
hasOwnProperty("name"):判断对象实例（非原型链）是否含有 name 属性
isPrototypeof(object):用于判断当前对象是否为另一个对象的原型
propertyIsEnumerable(propertyName):用于判断属性是否可以使用for遍历（非原型链）
toLocaleString():返回对象的字符串表示
toString():返回对象的字符串表示
valueof():返回对象的表达形式，可能是Number或者是string等。
```

### 3.5 操作符

#### 3.5.1 ++和--

```
++/-- 不仅可以用在整数上面，也可以用在其他类型上面
方法是，先把其他类型转化为Number类型
对于小数，实现的是+/-1
```

#### 3.5.2 位操作

`NaN`和`Infinity`都会当做`0`处理。

##### 按位非 ~

每一位0变1,1变0，相当于a*(-1)-1，所以~25 = -26

##### 异或 ^

```
相异为1，也可以理解成按位翻转，1则翻转，0则保持不动。
```

##### 右移

```
>> : 有符号右移
>>> : 无符号右移
```

#### 3.5.2 布尔操作符

##### 逻辑非 ！

* ! 可以作用域任何类型，返回boolean值，参照Boolean()类型转换
* !!可以实现将变量变为boolean类型

##### 逻辑与 &&

当`与`操作两边不为Boolean值时，规则如下：

* 如果有一个数为undefined, null, "", false, NaN，则返回该值
* 否则返回第二个值

##### 逻辑或 ||

当`或`操作两边不为Boolean值时，规则如下：

- 当第一个数为undefined, null, "", false, NaN时，返回后面那个
- 只有两个数都为undefined, null, "", false, NaN时，才返回该值
- 否则返回第一个值

#### 3.5.5 其他运算

##### 幂运算 **

```js
//es7引入的
3**3 == Math.pow(3,3)
```

##### 加法/减法 +/-

* 当作为一元运算符时，将该类型转为Number类型
* 当作为两元运算符时，如果有一方为字符串，则左右都转为字符串进行拼接

##### 比较运算符 > < 

* 都是字符串，则按ascill按位比较
* 如果都是数字，则按数字大小比较
* 其他情况转为Number类型进行比较

##### 相等和全等 == 和 ===

```
== 会进行类型转换，所以null == undefined; NaN与任何值都不相同
=== 不会进行类型转换
```

#### 3.6.5 for-in和for-of语句

```
for-in 用于遍历对象（数组）的属性，包括原型链上的（Enumerable为true），但是不包括symbol属性；无顺序。
for-of 用于遍历可迭代对象的值，不可直接遍历对象；有顺序。
for(const item in obj)
for(const item in [1,2,3])
```

#### 3.6.9 with

```js
//作用：简化了写法，但是不推荐
with(objectName){
	let a = name  //name会先查看是否是objectName的属性。 
}
```

#### 3.6.10 switch

```js
switch(i){
	case 1:
		console.log("1")
		break;js
	default:
		console.log("other")
}
```

## 第4章 变量、作用域和内存

#### 4.1.3 传递参数

```js
//函数传参是按值传递的
function f(obj){
	obj = new Object();
    obj.name = 'zzz'
}
let obj = new Object();
obj.name="xx"
f(obj) 
obj.name === 'xx' //obj依然是一开始创建的那个
```

#### 4.1.4 确定类型

确定原始类型：`typeof`

确定具体实例类型：`instanceof`

```js
person instanceof Person
原始类型 instanceof Object //false
```

### 4.2 执行上下文与作用域

* 执行上下文用来决定能访问到的变量、函数以及访问规则；最外层就是全局上下文。
* 执行上下文中有一个`变量对象`，函数是`活动对象`；
* 变量对象 一方面保存变量，另一方面保存`作用域链`；
* 作用域链是用来指示查找变量的顺序，首部保存的是当前变量对象，然后依次保存外部的变量对象，最外一层是全局变量对象

### 4.3 垃圾回收

#### 4.3.1 标记清理

标记变量进入上下文环境、变量非上下文环境、变量离开上下文。

#### 4.3.2 引用计数

记录每个值被引用的次数，当引用次数为0时，就可以回收变量。

存在问题：`循环引用`；

解决办法：清除引用`设置null值`。

## 第5章 基本引用类型

### 5.1 Date

```
 p104-107
```

## 第6章 集合引用类型

### 6.2 Array

#### 6.2.1 创建数组

**构造函数方式**

```js
let arr = new Array(20) //20表示数组长度
let arr = new Array("red","green")
```

**字面量方法**

```js
let arr = []
let arr = ["red",green]
//不会调用Array构造函数
```

**Array.from 方法**

```js
//Array.from将类数组转为数组，属于浅复制
let o1 = {}
let o2 ={}
let a1 = [o1,o2]
let a2 = Array.from(a1) 
a1 === a2          //false
a1.o1 === a2.o1    //true
```

#### 6.2.3 length属性

Array的length是可改的，如果将length更改为比较大的数，那么中间的数会用unfined填充。

#### 6.2.4 检测数组

* array instanceof Array
* Array.isArray(array)

#### 6.2.5 迭代器方法

Array的`原型链`上面暴露3个迭代方法：keys(),values(),entries()；皆返回迭代器对象，可用`Array.from`转化

```js
let arr = ["red","yellow","green"]
let res = arr.keys()  //0,1,2  索引的迭代器
let res = arr.values()//"red","yellow","green"  数组元素的迭代器
let res = arr.entries() //[0,"red"],[1,"yellow"],[2,"green"] 键值对的迭代器
```

#### 6.2.6 数组填充

**填充：fill(填充数, start, end)**

* 前开后闭
* start，end可为负数

#### 6.2.8 7个改变数组大小的操作

* push、pop，尾部插入和输出，push可以插入多个值，返回最后插入的值
* unshift、shift，头部插入和输出，其他push、pop
* sort(()=>a-b)  a-b是从小到大，b-a是从大到小；默认是从小到大，调用toString()方法
* reverse()，倒转数组
* splice(index,count,content1,content2)，从index开始删除count个元素，并插入content1，content2；index可为负数。

#### 6.2.11 合并数组

`arr = arr.concat(arr1)`将数组arr1和arr合并

#### 6.2.12 搜索和位置方法

##### 严格相等 indexOf(), lastIndexOf(), includes()

* 三者函数原型 f(content，start)，content为要查找的内容，start为起始位置
* 使用 === 进行判断，前两个返回索引值（-1），后者返回Boolean值

##### 断言函数 find、findIndex

* 函数原型 f((item,index,this)=>item===content)
* find若未找到，则返回undefined，findIndex返回-1

#### 6.2.13 迭代方法

5个迭代方法：`every、some、filter、forEach、map`

```
函数原型：f((item,index,this)=>{})
every: 如果所有项都为true，则返回true
some: 如果某项返回true，则返回true
filter: 过滤判断条件为true的项
forEach: 遍历所有项，不可中途break，没有返回值
map: 遍历所有项，每一项都有返回值，并返回最后的数组
```

#### 6.2.14 归并方法reduce和reduceRight

```js
arr.reduce((pre,cur,index,this)=>{
	return pre+cur;   
},0)
//求和案例，如给定number（0），则number为第一项，否则自动从第二项开始执行
```

#### 数组其他方法

##### 切片 slice

arr.slice(strat,end) 返回下标start到end之间的数，前并后开，可以为负数

##### 扁平化 flat

arr.flat(deep) deep为扁平的深度，默认是1。 

### 6.3 定型数组

#### 6.3.2 ArrayBuffer 

```js
const buf = new ArrayBuffer(16);
buf.byteLength === 16 
ArrayBuffer用于申请n个字节的内存，初始值都为0；需用视图来访问buffer
```

#### 6.3.3 DataView 视图

专为`文件和网络I/O`设计，可对`缓存数据`进行管理，性能也差一些；默认是大端序列。

```js
const buf = new ArrayBuffer(16);
const dataView = new DataView(buf,2,12);
dataView.byteOffset === 2  //视图初始位置
dataView.byteLength === 12	//视图终止位置
dataView.buffer === buf  //视图引用的buf
```

##### 使用DataView对buffer进行数据读写

```js
const buf = new ArrayBuffer(2);
const dataView = new DataView(buf);
dataView.setUint8(0,255)  // 0 位置设置为255
console.log(dataView.getUint8(1))  //0
console.log(dataView.getUint8(0))  //255

//每个ElementType都有set和get方法
```

**ElementType有如下选项**

| ElementType | 字节 |
| ----------- | ---- |
| Int8        | 1    |
| Uint8       | 1    |
| Int16       | 2    |
| Uint16      | 2    |
| Int32       | 4    |
| Uint32      | 4    |
| Float32     | 4    |
| Float64     | 8    |

#### 6.3.4 定型数组

##### 创建定型数组的4种方式

```js
const buf = new ArrayBuffer(16);
const int1 = new Int16Array(buf);
const int2 = Int16Array.from([1,2,3]);
const int3 = Int16Array.of(1,2,3);
const int4 = Int16Array(8);
console.log(int3.length);     // 3
console.log(int3.byteOffset); // 0
console.log(int3.byteLength); // 6
console.log(int3.buffer)	  //引用的ArrayBuffer	

Int16Array.BYTES_PER_ELEMENT //返回每个定型数组元素的大小
//定型数组基本包含数组的方法，但是无法使用push、concat等方法改变定型数组大小
```

##### 赋值、复制和合并定型数组

```js
// 赋值
const int1 = Int16Array(8);
int1.set([1,2,3,4],0) //从0位置开始赋值
//复制
const int2 = int1.subArray(1,4) //把int1[1:4]复制到一个新的定型数组
//合并
const int3 = new ElementType(arr1.length+arr2.length);
int3.set(arr1,0);
int3.set(arr2,arr1.length)
```

### 6.4 Map

#### 6.4.1 基本API

```js
let m = new Map();
m.set('name','xxx'); //新增键值对
m.size;              //查看键值对个数
m.has('name');       
m.get('name');
m.delete('name');    //清除name的键值对
m.clear()            //清空整个map
```

#### 6.4.2 迭代

Map与Object不同的是，Map迭代是按照插入的顺序。

* map.keys();

* map.values();

* map.entries();
* 扩展操作符：[...map] 扩展为[[key1,value1]]的数组

### 6.5 WeakMap

WeakMap是Map的兄弟类型，基本API与Map相同，但是键只能是`Object`类型。

#### 6.5.2 弱键

WeakMap中的`弱键`引用的对象在没有其他引用时，该键值对就会被垃圾回收程序回收。

#### 6.5.3 不可迭代键

因为WeakMap的键值对随时都可能被回收，所以没有提供遍历键/值的方法，同时也没有clear方法。

### 6.6 Set

#### 6.6.1 基本API

```js
const set = new Set();
set.add(1) //添加项
set.has(1) //判断是否存在项
set.size   //查看长度
set.delete(1) //删除项
set.clear()  //清空set
```

#### 6.6.2 顺序与迭代

Set也是顺序迭代，`keys`和`values`返回值相同，`entries`则返回`两个`的value值`[[value,value]]`；支持扩展操作符`[...set]`

### 6.7 WeakSet

WeakSet是Set的兄弟类型，基本API与Set相同，但是键只能是`Object`类型。

#### 6.7.2 弱键

WeakMap中的`弱键`引用的对象在没有其他引用时，该值就会被垃圾回收程序回收。

#### 6.7.3 不可迭代值

因为WeakSet的值随时都可能被回收，所以没有提供遍历值的方法，同时也没有clear方法。

### 6.8 迭代与扩展操作

4种定义了默认迭代器的引用类型：

* Array
* 定型数组
* Map
* Set

**特性**

* 使用for of 进行顺序迭代
* 使用扩展操作：[...arr]、[...typeArray]、[...map]、[...set]

## 第8章 对象、类和面向对象编程

#### 8.1.1 属性的类型

使用内部特性来描述属性的特征，包括`数据属性`和`访问器属性`。

##### 1 数据属性（拥有一个位置来保存值）

| 特性             | 描述                           | 默认值    |
| :--------------- | ------------------------------ | --------- |
| [[Configurable]] | 属性是否可以delete或是重新配置 | true      |
| Enumberable      | 属性是否可通过for in 遍历      | true      |
| Writable         | 属性值是否可更改               | true      |
| Value            | 属性值                         | undefined |

**定义/修改属性特性**

```js
Object.defineProperty(person,"name",{
    writable:false,
    value:'xxx'
})
//使用该方法定义属性时，Configurable Writable Enumberable默认为 false
```

##### 2 访问器属性(不包含数值，有getter setter)

| 特性             | 描述                           | 默认值 |
| :--------------- | ------------------------------ | ------ |
| [[Configurable]] | 属性是否可以delete或是重新配置 | true   |
| Enumberable      | 属性是否可通过for in 遍历      | true   |
| Get              | 访问属性时调用该方法           |        |
| Set              | 给属性赋值时调用               |        |

**定义访问器属性**

```js
let __name ="xxx";
Object.defineProperty(person,"name",{
    get(){
        return __name;
    },
    set(value){
        __name = value;
	}
})
```

#### 8.1.3 读取属性的特征

```js
Object.getOwnPropertyDescriptor(person,"name");
//返回name属性的特征对象
Object.getOwnPropertyDescriptors(person);
//返回person的所有属性特征对象
```

#### 8.1.4 合并对象 Object.assign() 

```js
//合并n个原型上Enumerable为true的属性，即console.log()打印出来的属性，属于浅复制
Object.assign(target,o1,o2);
```

#### 8.1.5 === 的加强版 Object.is()

```js
Object.is(o1,o2)
//该方法是 === 的加强版，甚至连NaN与NaN都能判断
```

#### 8.1.6 增强的对象语法

```js
//属性简写
//方法简写
const name ='aaa';
const obj ={
    name,
    getName(){
		return this.name;
    }
};

//可计算属性
let propertyName = "name";
const obj ={
    [propertyName]:'aaa'
};
obj[propertyName] === 'aaa'
```

#### 8.1.7 对象解构

解开对象(基础类型会转为对象)，使其与变量相对应

```js
const obj = {
    name:'xxx';
}
//将name的值赋值personName
const {name:personName} = obj;
//简写形式
const {name} = obj;
//定义默认值
const { name = "aa"} = obj;
//也可给已有变量赋值，需用()包裹
let name;
({ name } = obj )
```

### 8.2 创建对象

#### 8.2.1 常用方式

```js
//构造函数
let o1 = new Object();
//字面量对象
let o2 = { };
```

 #### 8.2.2 工厂模式

```js
function(name){
	let o = new Object();
	o.name = name;
	return o;
}
//缺点：没法确定对象标识,constructor指向
```

#### 8.2.3 构造函数模式

```js
function Person(name){
	this.name =name;
    getName(){
        return this.name;
    }
}
let person = new Persion("bb")
//优点：解决了工厂模式对象标识不明确的缺点
//缺点：对于方法，定义在实例上，不可复用。
```

**执行过程**

* 新建一个实例对象，该对象\_\_proto\_\_指向构造函数的prototype
* 构造函数this指向该对象，执行this赋值
* 若有return，则return，否则返回该对象

#### 8.2.4 原型模式

```js
//每个函数上有属性prototype指向原型对象，原型对象上定义的属性、方法可在所有实例上共享
function Person{}
Person.prototpye.getName=function(){
    return this.name;
};
let person = new Person()
//缺点：将数据定义在原型对象上，对于引用类型共享存在问题
```

##### 1 构造函数、实例、原型对象的关系

**实例与构造函数**

```js
//实例由构造函数建立
const person = new Person();
person instanceof Person
```

**构造函数与原型对象**

```js
Person.prototype === 原型对象p
p.constructor === Person
```

**实例与原型对象**

```js
person.__proto__ === 原型对象p
p.isPrototypeOf(person) === true

//实例定义与原型对象相同的属性，会遮蔽原型对象
//可用delete删除对象属性（包括原型对象）
```

##### 2 Object.create()与字面量创建对象

```js
const p = {
    name:'xxx'
}
const person = Object.create(p);
//以p作为原型对象创建对象

const obj = {};
//obj的原型对象为Object的实例
```

#### 8.2.5 对象迭代

对象迭代方法通常只作用于实例上，不包括`Symbol`属性。

##### for in

for in 遍历实例和原型上`Enumerable`为`true`的值，不包括`Symbol`属性，如实例遮蔽了原型上的，则只返回实例上面的。

##### Object.keys() Object.values() Object.entries()

for in的弱化版，返回`实例`上for in的结果

##### Object.getOwnPropertyNames()

返回实例上所有属性，不包括`Symbol`属性。

##### Object.getOwnPropertySymbols()

返回实例上`Symbol`属性。

**前2者顺序不定，后2者顺序固定(以字符串顺序)。**

##### 几个能访问Symbol属性的方法

```js
Object.getOwnPropertyDescriptors()
//访问属性所有特性
console.log
//打印所有Enumerable为true的属性，包括Symbol属性
```

### 8.3 继承

#### 8.3.1 原型链

子类型的`原型对象`是父类型`实例对象`。

```js
function supType(name){
    this.name;
}
supType.prototype.getName = function(){
    return this.name;
}
function subType(name,age){
	this.name = name;
}
subType.prototype = new SupType()
```

**缺点：**

* 原型对象上面的属性被共享
* 子类型无法给父类型传递参数

#### 8.3.2 盗用构造函数

在`子类型构造函数`中调用`父类型构造函数`

```js
function supType(name){
	this.name = name;
    getName(){
        return this.name;
    }
}
function subType(name,age){
	supType.call(this,name);
    this.age = age;
}
```

**缺点：**

* 所有属性、方法都定义在实例上，方法不能复用

#### 8.3.3 组合继承

综合了原型链和盗用构造函数，先使用原型继承，再调用构造函数方法。

```js
function supType(name){
    this.name = name;
}
supType.prototype.getName = function(){
	return this.name;
}
function subType(name,age){
    supType.call(this,name);
    this.age = age;
}
subType.prototype = new supType()
```

**缺点：**

* 重复定义属性，supType的属性既定义在原型对象上，也定义在了实例对象上

#### 8.3.4 原型式继承

以某个对象为原型对象，建立2个对象的联系。与Object.create()效果相同。

```js
function createObj(obj){
	let o = Object.create(obj);
    return o;
}
```

优点：适合不需要单独创建构造函数。

缺点：不适合批量继承。

#### 8.3.5 寄生式继承

原型式继承和工厂模式的结合，加强版的原型式继承。

```js
function createObj(obj,name){
	let o = Object.create(obj);
	o.name = name;
	return o;
}
```

#### 8.3.6 寄生式组合继承

优化以下功能：

* supType的方法尽量定义在原型对象上，属性定义在subType实例上
* subType可以向supType传参
* subType可以自定义参数和方法

```js
function supType(name){
    this.name = name;
}
supType.prototype.getName = function(){
	return this.name;
}
function subType(name,age){
    supType.call(this,name);
    this.age = age;
}
function createObj(supType,subType){
    let prototype = Object.create(supType.prototype);
    prototype.__proto__.constructor = supType;
    subType.prototype = prototype.__proto__;
}

createObj(supType,subType)

let o = new subType("xxx",19);
```

### 8.4 类

#### 8.4.1 类定义

```js
//类定义不能变量提升，可定义属性（实例）、方法（原型对象）和静态方法
class Person{
    constructor(name){
        this.name=name;
    }
    sayName(){
        return this.name;
    }
    static age = 19
    static showAge(){
        return Person.age
    }
}
```

#### 8.4.4 继承

```js
class Dog extends Animal{
	constructor(name){
		super(name) //调用父类的构造函数，在此之前不可使用this
	}
}
```

## 第10章 函数

### 10.1 箭头函数

* 箭头函数的this由定义的位置决定
* 箭头函数不能使用arguments访问参数
* 箭头函数没有prototype属性

### 10.6 参数扩展与收集

扩展操作符既可以用于调用`函数传参`，也可以用于`定义函数参数`。

```js
function getSum(...value){
    return value.reduce((pre,cur)=>pre+cur);
}
const value = [1,2,3]
getSum(...value)
```

#### 10.9.4 new.target

new.target用于鉴别function是通过new调用的，还是普通调用。

### 10.10 函数属性和方法

#### apply bind call

* apply和call用于改变函数的执行环境，bind用于绑定指定环境，并返回函数
* apply与call在传参上有所区别，apply(this, arr) call(this, arg1,arg2)，记忆：apply => a => all => arr
* bind与call传参形式相同
* call的性能好于apply。

### 10.13 尾调用优化

当外部函数的返回值是函数时，原本需要等待内部函数执行完返回，外部函数方能返回；尾调用优化即是如果发现返回值只依赖内部函数，便可直接将外部函数销毁，再调用内部函数。

尾调用优化条件：

* 严格模式下执行
* 尾调用内部函数作为返回值，不可有其他额外操作（包括toString()等）
* 内部函数不可引用外部函数定义的变量，但你可以是函数参数

