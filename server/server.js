const fs = require("fs");
const PORT = require("./port");
const express = require("express");
const app = express();

app.get("/message/:txt", (req, res, next) => {
    var txt = decodeURIComponent(req.params.txt);
    fs.appendFile("../client_info/client_info.txt", `${txt} \n ---- ${new Date().toLocaleString()} \n\n`, (err) => {
        if (err) {
            return console.error(err);
        }
    })
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
