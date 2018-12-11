const express = require('express')
const app = express()
const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/* GET home page. */
app.get('/', function(req, res, next) {
  res.send("I'm awesome");
});

app.get('/webhook', function(req,res) {
  console.log("From Facebook request ",req);
  console.log("From Facebook ",res);
  res.send("HELLO");
});
