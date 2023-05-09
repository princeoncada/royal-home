import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsj-0IqtUQktIP4oARc_pkq_5rbKcBbOU",
  authDomain: "smart-a6c4d.firebaseapp.com",
  databaseURL:
    "https://smart-a6c4d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-a6c4d",
  storageBucket: "smart-a6c4d.appspot.com",
  messagingSenderId: "688509571679",
  appId: "1:688509571679:web:3fdaf820f66f87667601ea",
  measurementId: "G-H0P7G39GT2",
};

initializeApp(firebaseConfig);
const auth = getAuth();
auth.onAuthStateChanged((user) => {});

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/login", function (req, res) {
  res.render("login.ejs", { hidden: "hidden" });
});

app.post("/logging", function (req, res) {
  const { email, password } = req.body;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      res.redirect("/dashboard");
    })
    .catch((error) => {
      res.render("login.ejs", { hidden: "" });
    });
});

app.get("/signup", function (req, res) {
  res.render("signup.ejs", { hidden: "hidden", text: "" });
});

app.post("/signing", function (req, res) {
  const { email, password } = req.body;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      res.redirect("/dashboard");
    })
    .catch((error) => {
      res.render("signup.ejs", { hidden: "", text: error.code });
    });
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

app.get("/dashboard2", (req, res) => {
  res.render("dashboard2.ejs");
});

app.post("/logout", (req, res) => {
  auth.signOut().then(() => {
    res.redirect("/");
  });
});

app.get("/statistics", (req, res) => {
  res.render("statistics.ejs");
});

app.post("/add_appliance", (req, res) => {
    res.render("add.ejs")

});

app.post("/app1", (req, res) => {  
    res.render("edit.ejs")
});

app.post("/app2", (req, res) => {
    res.render("edit2.ejs")

});

app.post("/app3", (req, res) => {
  res.render("edit3.ejs")

});


app.listen(port, function () {
  console.log("listening on port " + port);
});
