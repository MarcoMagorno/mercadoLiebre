const express = require("express");
const path = require("path");

const app = express();

const publicFolderPath = path.resolve (__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(3002, function () {
    console.log("servidor corriendo en el puerto 3002");    
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});