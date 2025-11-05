


const fs = require('fs');

// नया file बनाते हैं और उसमें कुछ लिखते हैं
fs.writeFile('example.txt', 'Hello, this is my first file!', (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('File created and data written successfully!');
  }
});

fs.writeFile("aggregation.js", "file is all about aggreagatin",(err)=>{
    if(err){
     console.log("error", err)
    }
    else{
        console.log("server fs file is created");
    }
})


fs.readFile("example.txt", "utf8",(err,data)=>{
    if(err){
        console.log("error", err)
    }
    else{
        console.log("server read file", data)
    }
})

// jodna ke liye hota hai

fs.appendFile("example.txt", "/nhfjfbhbjfdvfhbv jfdvjdbcvhjbhjbfbfhjbfhjbf", (err)=>{
    if(err){
        console.log("error", err)
    }
    else{
        console.log("Data added")
    }
})

// delete ke liye hota hai


fs.unlink("example.txt", (err)=>{
    if(err){
        console.log("err", err)
    }
    else{
        console.log("Delete file")
    }
})


fs.rename('example.txt', 'myFile.txt', (err) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('File renamed successfully!');
  }
});
