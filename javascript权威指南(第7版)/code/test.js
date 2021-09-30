// let obj={
//     innerObj:{
//         name:"obj"
//     }
// }
// console.log(obj?.innerObj?.name)  //"obj"
// console.log(obj["innerObj"]["name"])
// console.log(obj.innerObj.name)
//等同于 obj["innerObj"]["name"] 
// obj.innerObj.name

// let a 
// a
// =
// 3
// console.
// log(a)

function SuperType(name,age){
    this.name = name
    this.age = age
}
SuperType.prototype.habit = function(){
    console.log('打篮球')
}
function SubType(name,age,like){
    SuperType.call(this,name,age)
    this.like = like
}
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.listen = function(){
    console.log('听一首lastDance')
}
let Liziwei = new SubType('LiZiwei',18,'HunagYuxuan')
console.log(Liziwei)
console.log(Liziwei.listen())
console.log(Liziwei.habit())