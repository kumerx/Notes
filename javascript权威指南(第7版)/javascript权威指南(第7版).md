# javascript权威指南(第7版)

### 1 javascript简介

#### 1.1 使用?.(ES2020)条件式访问属性

```js
let obj={
    innerObj:{
        name:"obj"
    }
}
console.log(obj?.innerObj?.name)  //"obj"
//等同于 obj["innerObj"]["name"] 
// obj.innerObj.name
            
//注意：?. node环境执行不了，但是浏览器可以执行，应该是版本太新了
```

### 2 词法结构

JavaScript 程序是使用Unicode字符集编写的。

当解释器无法将下一行非空格字符解释为当前语句的一部分时，才会将换行符当做分号。但有3种情况是一定解释为分号的：

* return 、throw、yield、break、continue
* 后置++和--  （i++）
* 箭头函数 => 跟参数列表必须在一行

```js
let a 
a
=
3
console.
log(a)
//解析为 let a; a=3;console.log(a)
```

### 3 类型、值和变量

