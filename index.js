const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const bodyParser = require('body-parser');

var app = express()
app.use(bodyParser.json());

app.get('/api/hello', function(req, res) {
  res.send('Hello');
});

app.post('/api/sms/', function(req, res) {
  console.log(req.body);
  res.send('Bye');
});

app.listen(PORT, function() {
  console.log('Hackathon App listening');
});
