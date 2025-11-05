

const MyPromise  = new Promise((resolve,reject)=>{
    const success  =true;
    if(success){
        resolve("Fullfiled promise is done")
    }
    else{
        reject("reject promise ")
    }
})

MyPromise
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error)
})


 MyShow=async()=>{
    const result = await MyPromise;
    console.log(result)

}

MyShow();