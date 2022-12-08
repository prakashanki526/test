const express = require("express");

const app = express();

// const mongoUrl = process.env.MONGDB_URI;

// mongoose
//     .connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() =>{
//         console.log("database connected successfully.");
//     })
//     .catch(() =>{
//         console.log("database not connected successfully.");
//     })

app.use(express.json());
app.use(express.urlencoded());

const courses = [{id:1, name:"Hindi"},{id:2, name:"English"}];

app.get("/api/health",(req,res) => {
    res.send("Working");
});

app.get("/api/courses",(req,res) =>{
    res.send(courses);
});

app.get("/api/courses/:id",(req,res) =>{
    const id = req.params.id;
    res.send(id);
});

app.get("/api/courses/:name",(req,res) =>{
    const id = req.params.id;
    res.send(id);
});

app.post("/api/courses",(req,res) =>{
    const reqPayload = req.body;
    console.log(reqPayload);
    res.send(reqPayload);
});

app.get("/api/books",(req,res) =>{
    res.send(courses);
});

app.get("/api/books/:id",(req,res) =>{
    const id = req.params.id;
    res.send(id);
});

app.get("/api/books/:name",(req,res) =>{
    const id = req.params.id;
    res.send(id);
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port,(req,res) =>{
    console.log(`Listening at http://${host}:${port}`);
});