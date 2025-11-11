

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello browser");
    console.log("Server hai chalu")
})

app.get("/student", (req,res)=>{
    res.json({
        name:"praveen",
        email:"pc852180@gmail.com",
        city:"Bhopal",
        number:78498754343,

    })
})


app.post("/studentpost", (req,res)=>{
    const data = req.body;
    console.log(data);
    res.send({massg:"my data post ho gaya hai",data:data});

})

app.delete("/student/:id", (req, res) => {
    const stiid = req.params.id;  // URL se id le rahe hain

    console.log({ msg: "Data delete hua", id: stiid });

    res.send({
        message: "Data deleted successfully",
        deletedId: stiid
    });
});


app.put("/studentupdate/:id", (req, res) => {
    const studentid = req.params.id;  // URL se id mil rahi hai
    const newData = req.body;         // Body se updated data mil raha hai

    console.log({
        msg: "Data update hua",
        id: studentid,
        updatedData: newData
    });

    res.send({
        message: "Student data updated successfully",
        id: studentid,
        newData: newData
    });
});



app.listen(8000, ()=>{
console.log("Server is running on 8000 port");
})