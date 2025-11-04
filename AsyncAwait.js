
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




async function userDetails() {
  let user = await new Promise(res => setTimeout(() => res("User: Rahul"), 1000));
  console.log(user);
}
userDetails();
