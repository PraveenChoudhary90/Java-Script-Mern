function MyTask(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("task 1")
            resolve()
        },1000)
    })
}

function MyTask2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("task 2")
            resolve()
        },1000)
    })
}


function MyTask3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("task 3")
            resolve()
        },1000)
    })
}


function MyTask4(){
    return new Promise(resolve=>{
        setTimeout(()=>{
          console.log("task 4")
            resolve()
        },1000)
    })
}

// MyTask(()=>{
//     console.log("task 1")
//     MyTask2(()=>{
//     console.log("task 2")
//         MyTask3(()=>{
//     console.log("task 3")
//             MyTask4(()=>{
//     console.log("task 4")
//                 console.log("All Done")
//             })
//         })
//     })
// })


const run =async ()=>{
   await MyTask();
   await MyTask2();
   await MyTask3();
   await MyTask4();
}

run();




function getData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

function processData(callback) {
  setTimeout(() => {
    console.log("Data processed");
    callback();
  }, 1000);
}

function saveData(callback) {
  setTimeout(() => {
    console.log("Data saved");
    callback();
  }, 1000);
}

// Nested callbacks = callback hell
getData(() => {
  processData(() => {
    saveData(() => {
      console.log("All done!");
    });
  });
});
