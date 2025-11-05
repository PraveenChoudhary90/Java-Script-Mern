
// const Mydata =(name, callback)=>{
//     console.log("hello", name);
//     callback();
// }

// const sayhi=()=>{
//     console.log("byee");
// }

// const data = Mydata("praveen", sayhi);

const Mydata = (name, callback)=>{
    setImmediate(()=>{
    console.log("hello", name);
     callback();
    },2000)
}


const Sayhi =()=>{
    console.log("By byyyyy!!!!!!!!!!!!!!");
}


const MyShow = Mydata("praveen", Sayhi);

MyShow