const fs = require("fs");
const PORT = require("./port.js");
const express = require("express");
const app = express();
const mail_config = require("./mail_config.js");

app.get("/message/:txt", (req, res, next) => {
    var txt = decodeURIComponent(req.params.txt);
    mail_config(txt)
    console.log(txt);
})

app.get("*", (req, res, next) => {
    if (req.url == "/") {
        console.log("Page get ");
        res.sendFile(process.cwd() + "/index.html")
    } else {
        res.sendFile(process.cwd() + req.url)
    }
    //    next();
})

app.listen(PORT, () => {
    console.log("Server is start on port: ", PORT)
})
