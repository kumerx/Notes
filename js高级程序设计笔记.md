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





















