
const http = require("http");

const Server = http.createServer((req,res)=>{
    res.write("Yes i am Browser");
    console.log("it is server");
    res.end();
})

Server.listen(8000, ()=>{
    console.log("Srver is running on 8000 port");
})

