
const MyShow = ()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("data is gated")
        },2000)

    })
}

async function Show(){
    console.log("Now its comming!!!!!!!!!!!!");
    const res = await MyShow();
    console.log(res);
}

Show();