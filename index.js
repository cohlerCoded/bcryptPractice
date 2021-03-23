const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/user");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/bcryptPractice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  res.redirect("/");
});

app.get("/secret", (req, res) => {
  res.send("THIS IS SECRET YOU CANNOT SEE ME UNLESS YOU ARE LOGGED IN");
});

app.listen(3030, () => {
  console.log("listening on port 3030");
});

///////////////////BEFORE////////////////////////
// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(hash);
//   console.log(salt);
// };

// const hashPassword = async (pw) => {
//   const hash = await bcrypt.hash(pw, 12);
//   console.log(hash);
// };

// const login = async (pw, hashpw) => {
//   const res = await bcrypt.compare(pw, hashpw);
//   if (res) console.log("SUCCESS!");
//   else console.log("WRONG PASSWORD");
// };

//hashPassword("password");
// login(
//   "password",
//   "$2b$12$l3vN73TsGtK8EFWeIxyQI.qSRNNUSGOep9JIy6hh0hvkDC.CykSs."
// );
