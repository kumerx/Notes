//基本数据类型

//0 原始类型 6+1
/*
let unfined;
let nu=null;
let bool=true;
let num=1;
let str="xia";
let sy = Symbol();
let o = {};
let f = ()=>console.log("hello");
console.log(typeof unfined);
console.log(typeof nu);
console.log(typeof bool)
console.log(typeof num)
console.log(typeof str)
console.log(typeof sy)
console.log(typeof o)
console.log(typeof f)
*/

//1 Undefined
/*
let age;
let name
console.log(typeof age)
console.log(typeof name)
*/

//1 Null
/*
let age;
let o=null;
console.log(age==o)
console.log(age===o)
*/

//3 Boolean
/*
let o={}
let o1=null
console.log(Boolean(o))
console.log(Boolean(o1))
*/

//4 Number
/*
let str="11abc"
console.log(Number(str))
let str1="abc11"
let str2 = ""
console.log(parseInt(str1))
console.log(parseInt(str2))
*/

//5 String
/*
let str = `
first line
second line`
let str1=`first line
second line`
console.log(str[0])
console.log(str1[0])
let a=1
let b=2
function add(strings,...str){
    console.log(strings)
    for(const item of str)
        console.log(item)
}
add`${a} + ${b} = ${a+b}`
*/

//基本引用类型
//1 Date
let now = new Date()
console.log(now)
console.log(now.valueOf())