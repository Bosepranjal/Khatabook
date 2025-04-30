const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));

app.get("/", (req,res)=>{
    fs.readdir(`./hisaab`, function(err, files){
        if(err) return res.status(500).send(err);
        res.render("index" , {files: files});
    });
});

app.get("/create",function(req,res){
    res.render("create");
} );

app.post("/createhisaab" , (req,res)=>{
    var currDate = new Date();
    var date = `${currDate.getDate()}-${currDate.getMonth()+1}-${currDate.getFullYear()}`;
    var hisaabName = req.body.hisaabName || 'default';
    var filename = `${date} ${hisaabName}.txt`;

    fs.writeFile(`./hisaab/${filename}`, req.body.content , function(err){
        if(err) return res.status(500).send(err);
        res.redirect("/");
    });
});

app.get("/edit/:filename" , (req,res)=>{
    fs.readFile(`./hisaab/${req.params.filename}` , "utf-8" , function(err , filedata){
        if(err) return res.status(500).send(err);
        res.render("edit" , {filedata , filename: req.params.filename});
    });
});

app.post("/update/:filename" , (req,res)=>{
    fs.writeFile(`./hisaab/${req.params.filename}` , req.body.content , function(err){
        if(err) return res.status(500).send(err);
        res.redirect("/");
    })
});

app.get("/hisaab/:filename" , (req,res)=>{
    fs.readFile(`./hisaab/${req.params.filename}`, "utf-8" , function(err, filedata){
        if(err) return res.status(500).send(err);
        res.render("hisaab" , {filedata , filename:req.params.filename});
    });
});

app.get("/delete/:filename" , (req,res)=>{
    fs.unlink(`./hisaab/${req.params.filename}` , function(err){
        if(err) return res.status(500).send(err);
        res.redirect("/");
    });
});


app.listen(3000);