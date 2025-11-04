

const  MyPromise= new Promise((resolve, reject)=>{

    let success = false;
  
    if(success){
        resolve("Data gateteddd");
    }
    else{
        reject("This is rejeted")
    }
})

MyPromise
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.log(error)
})


const MyPage = async()=>{
    const ans = await MyPromise;
    console.log(ans);
}