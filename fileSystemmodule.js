
const fs = require("fs");

fs.writeFile("heloo.html", "welcome to our html page", (err)=>{
    if(err){
        console.log(err)
    }
    else{
    console.log("THis is html page on server");
    }
})

fs.readFile("heloo.html", "utf8",(err,data)=>{
    if(err){
  console.log(err)
    }
    else{
    console.log("File is reading at server", data);
    }
})

fs.appendFile("heloo.html", "/n another page of html which based on some content",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("append file");
    }
})

fs.unlink("helo.html", (err)=>{
    if(err){
        console.log(err)
    }
    else{
  console.log("file is deleted")
    }
})
