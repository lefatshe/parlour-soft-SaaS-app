const express = require('express');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

app.get('/', (req,res) => res.send("Started login with JWT"))

app.get('/secret', isAuthenticated, (req,res) => {
  res.json({"message": "Secret Key"})
})
app.get('/readme', (req,res) => {
  res.json({"message": "Hello"})
})
app.get('/jwt', (req, res) => {
  let privateKey = fs.readFileSync('./private.pem', 'utf8');
  let token = jwt.sign({ "body": "stuff" }, "MySuperSecretPassPhrase", { algorithm: 'HS256'});
  res.send(token);
})

function isAuthenticated(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
    // retrieve the authorization header and parse out the
    // JWT using the split function
    let token = req.headers.authorization.split(" ")[1];
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    // Here we validate that the JSON Web Token is valid and has been
    // created using the same private pass phrase
    jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {

      // if there has been an error...
      if (err) {
        // shut them out!
        res.status(500).json({ error: "Not Authorized" });
        throw new Error("Not Authorized");
      }
      // if the JWT is valid, allow them to hit
      // the intended endpoint
      return next();
    });
  } else {
    // No authorization header exists on the incoming
    // request, return not authorized and throw a new error
    res.status(500).json({ error: "Not Authorized" });
    throw new Error("Not Authorized");
  }
}

app.listen(port, () => console.log(`Running: ${port}`));
