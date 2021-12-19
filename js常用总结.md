# JS常用总结

## Object

* Object属性需注意`实例属性`，`原型链属性`和`Symbol属性`

* 属性特征`Enumerable`决定了`遍历`和`打印`情况

**构造对象**

```js
//实例  o上有o1 o2(Enumerable false) o3(symbol)
//原型链p上有p1 p2 p3
let p = {
    p1:'xxx',
}
Object.defineProperty(p,'p2',{
    enumerable:false,
    value:'p2'
})
let p3 = Symbol('p3');
p[p3] = 'symbol p3'
let o = {
    o1:'xx',
}
Object.defineProperty(o,"o2",{
    enumerable:false,
    value:'o2'
})
let o3 = Symbol("o3")
o[o3] = 'symbol o3'
o.__proto__ = p;
```

**console.log操作**

```js
console.log(o);
//{ o1: 'xx', [Symbol(o3)]: 'symbol o3' }
//打印实例上面Enumerable为true的属性
```

**for in 操作**

```js
for(const item in o){
    console.log(item)
}
//o1 p1 
//遍历实例和原型链上Enumerable为true的属性，不包括Symbol
```



