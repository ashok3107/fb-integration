const express = require('express')
const app = express()
const bodyParser = require('body-parser')

port = process.env.PORT || 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/* GET home page. */

app.use(bodyParser.json());
app.get('/', function(req, res, next) {
  res.send("I'm awesome");
});

app.get('/webhook', function(req,res) {
  if(req.query['hub.verify_token'] === 'walmart@123')
    res.send(req.query['hub.challenge']);
  else
    res.send("HEYYY FUCK YOU");
});

app.post('/webhook', (req, res) => {
  console.log("Entered webhook method");
  console.log(req);
  console.log(req.body);
  res.send({
    success: true
  });
}); 
