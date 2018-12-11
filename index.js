const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Abhilash' });
});

app.get('/webhook', function(req,res) {
  console.log("From Facebook request ",req);
  console.log("From Facebook ",res);
  res.render('index',{ title: 'Hey THERE' });
  res.send("HELLO");
});
