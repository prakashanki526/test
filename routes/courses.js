const { Router } = require("express");
const route = Router();

const courses = [{id:1, name:"Hindi"},{id:2, name:"English"}];

route.get("/",(req,res) =>{
    res.send(courses);
});

route.get("/:id",(req,res) =>{
    const id = req.params.id;
    res.send(id);
});

route.get("/:name",(req,res) =>{
    const id = req.params.id;
    res.send(id);
});

route.post("/",(req,res) =>{
    const reqPayload = req.body;
    console.log(reqPayload);
    res.send(reqPayload);
});

module.exports = route;
