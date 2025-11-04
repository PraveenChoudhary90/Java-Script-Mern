
const Mydata =()=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Fatched Data")
        },2000)
    })
}

async function Showdata(){
    console.log("Data is Loading");
    const result = await Mydata();
    console.log(result);
}

Showdata()