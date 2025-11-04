
function mygreet(name, callback){
    console.log("Hello", name);
    callback();
    
}


function SayHello(){
    console.log("Good bye")
}

mygreet("Praveen choudhary Jii",SayHello);
