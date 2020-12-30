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
/*
let now = new Date()
console.log(now)
console.log(typeof now.valueOf())
*/

//2 RegExp
/*
let text = "mom and dad and baby"
let pattern = /mom (and dad (and baby)?)?/gi;
let matches = pattern.exec(text)
console.log(matches.index)
console.log(matches.input)
console.log(matches[0])
console.log(matches[1])
console.log(matches[2])
let text ="cat,bat,cat"
let pattern =/(.at)/
let res = pattern.exec(text)
console.log(res[0])
console.log(res[1])
function htmlEscape(text){
    return text.replace(/[<>"&]/g,(match,position,originalText)=>{
        switch(match){
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case "&":
                return "&amp;"
            case "\"":
                return "&quot;"
        }
    })
}
console.log(htmlEscape("<p class=\"greeting\">hello world!</p>"))
*/

//3 String
/*
let str="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
let substr = "e"
let res=[]
let opsition = str.indexOf(substr)
while(opsition > -1){
    res.push(opsition)
    opsition = str.indexOf(substr,opsition+1)
}
console.log(res)
*/

//集合引用类型
// 1 Array
/*
let o = {
    0:0,
    "1":2,
    length:2
}
console.log(o)
let a = Array.from(o)
console.log(a)
*/

//迭代器与生成器
//1 迭代器
/*
class Counter{
    constructor(limit){
        this.limit=limit
    }
    [Symbol.iterator](){
        let counter = 1;
        let limit = this.limit;
        return {
            next(){
            if(counter < limit){
                return {
                    value:counter++,
                    done:false
                }
            }else{
                return {
                    value:undefined,
                    done:true
                }
            }
        },
        return(){
            console.log("Exiting early")
            return {done:true}
        }
    }
    }
}
let o = new Counter(4)
for(const i of o){
    if(i>2){
        break;
    }else{
        console.log(i)
    }
}
*/
 //2生成器
 /*
 function * generator(){
     console.log("it is:",yield*[1,2])
 }
 for(const i of generator())
 {
     console.log("value",i)
 }
*/