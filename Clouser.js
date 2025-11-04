

function Outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log(count);
    }
}

const counter = Outer();
counter();
counter();
counter();
counter();

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     console.log(count);
//   }
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2


function outer1(m){
    return function inner1(name){
        console.log(m + "  " + name)
    }
}

const say = outer1("hiii");
say("choudhary jiii");

