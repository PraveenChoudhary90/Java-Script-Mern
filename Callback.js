
// function mygreet(name, callback){
//     console.log("Hello", name);
//     callback();
    
// }


// function SayHello(){
//     console.log("Good bye")
// }

// mygreet("Praveen choudhary Jii",SayHello);


// another example

function Mydata(callback){
    setTimeout(() => {
        console.log("Fateched data succesfully");
        callback();
    }, 1000);
}

Mydata(()=>{
    console.log("Now data is comming")
});


function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Now processing data...");
});



function Showdata(callback){
    setTimeout(()=>{
        console.log("FAteched");
        callback();
    },2000)

}

Showdata(()=>{
    console.log("now see")
})


