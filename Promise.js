

// const  MyPromise= new Promise((resolve, reject)=>{

//     let success = true;
  
//     if(success){
//         resolve("Data gateteddd");
//     }
//     else{
//         reject("This is rejeted")
//     }
// })

// MyPromise
// .then(function(result){
//     console.log(result)
// })
// .catch(function(error){
//     console.log(error)
// })


// const MyPage = async()=>{
//     const ans = await MyPromise;
//     console.log(ans);
// }

// MyPage()

const MyPromise = new Promise(function(resolve,reject){
  let success  =true;
  if(success){
    resolve("Promise is done")
  }
  else{
    reject("Promise is rejected")
  }
})

MyPromise
.then((result)=>{
  console.log("Promise true", result)
})
.catch((error)=>{
    console.log("Error", error)
})



async function Show(){
    const ans = await MyPromise;
    console.log("async await", ans);
}

Show();



