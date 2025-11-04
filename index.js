
function add(a,b){
    return a+b;
}

function multi(a,b){
    return a*b;
}

function calculate(a,b, oprate){
    return oprate(a,b);
}

const data =calculate(2,4, add);
console.log(data);

const data1 =calculate(2,4, multi);
console.log(data1);