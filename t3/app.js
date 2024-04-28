'use strict';

const express = require("express");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, 'pageCount.json');

let pageCount;
try {
    pageCount = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch (ignore) {
    pageCount = {
        "home": 0,
        "about": 0
    }
}

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    pageCount.home++;
    res.render("index", {pageName: "Home", pageUrl: "/about", count: pageCount.home});
    fs.writeFileSync(filePath, JSON.stringify(pageCount));
})

app.get("/about", (req, res) => {
    pageCount.about++;
    res.render("index", {pageName: "About", pageUrl: "/", count: pageCount.about});
    fs.writeFileSync(filePath, JSON.stringify(pageCount));
})

const port = 3000;
app.listen(port, () => {console.log("Server started on port: " + port)});
