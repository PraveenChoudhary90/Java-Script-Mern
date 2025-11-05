
async function Mydata(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const result = await response.json();
    console.log(result);

}

Mydata();