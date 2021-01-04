let p = new Promise((resolve,reject)=>{
    reject("ee")
    console.log("hello")
})
p.then(null,(e)=>{
    console.log(e)
})