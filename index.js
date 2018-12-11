const express = require('express')
const app = express()

port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/* GET home page. */
app.get('/', function(req, res, next) {
  res.send("I'm awesome");
});

app.get('/webhook', function(req,res) {
  if(req.query['hub.verify_token'] === 'walmart@123')
    res.send(req.query['hub.challenge']);
  else
    res.send("HEYYY FUCK YOU");
});
