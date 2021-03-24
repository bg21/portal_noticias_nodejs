const express = require('express');
const bodyParser = require('body-parser'); 

const hostname = "127.0.0.1";
const port = 3000;

const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, 'public')));
app.set("views", path.join(__dirname, "/views"));

//home
app.get("/", function(req, res){
    if(req.query.busca == null){
        res.send("home");
    }else{
        res.send("vc buscou algo");
    }

    res.send("home");
    
});
app.get("/:slug", function(req, res){
    res.send(req.params.slug);
});


app.listen(port, hostname, function(){
    console.log('servidor rodando');
});