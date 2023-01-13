const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const apikey = "3d2b52f7bafd3d29baae6f39a6c4e886-us21";
// const audianceId = "020e03aaeb";
// const https = require("https");

app.use(express.static("svg"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstname;
  const lastname = req.body.lastname;
  const mail = req.body.mail;
  res.send(
    `<p>First name : ${firstName} <br>Last name : ${lastname}  <br> Email : ${mail}</p>`
  );
  console.log(req.body);

  //   const url = "https://us21.api.mailchimp.com/3.0/lists/020e03aaeb";
  //   const options = {
  //     method: "POST",
  //     auth: "Vaibhav1:3d2b52f7bafd3d29baae6f39a6c4e886-us21",
  //   };
  //   https.request(url, options, function (response) {
  //     response.on("data", function (d) {
  //       console.log(d);
  //     });
  //   });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
