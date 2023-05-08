const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const firebase = require('firebase/app');
require('firebase/auth');
const auth = firebase.auth();

const firebaseConfig = {
    apiKey: "AIzaSyAsj-0IqtUQktIP4oARc_pkq_5rbKcBbOU",
    authDomain: "smart-a6c4d.firebaseapp.com",
    databaseURL: "https://smart-a6c4d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-a6c4d",
    storageBucket: "smart-a6c4d.appspot.com",
    messagingSenderId: "688509571679",
    appId: "1:688509571679:web:3fdaf820f66f87667601ea",
    measurementId: "G-H0P7G39GT2"
};

firebase.initializeApp(firebaseConfig)

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("edit.ejs");
});

app.listen(port, function () {
  console.log("listening on port " + port);
});
