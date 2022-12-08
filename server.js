const express = require("express");
const app = express();

const book = require("./routes/books");
const courses = require("./routes/courses");

// const mongoUrl = process.env.MONGDB_URI;

app.use(express.json());
app.use(express.urlencoded());

app.get("/api/health",validate,(req,res,next) => {
    res.send("Working");
});

app.use("/api/books",book);
app.use("/api/courses",courses);

// app.use((req,res) => {
//     res.status(404).send("Page not found!!");
// });

function validate(req,res,next){
    res.send("Hello");
    next();
}

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port,(req,res) =>{
    console.log(`Listening at http://${host}:${port}`);
});