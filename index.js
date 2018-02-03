const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express()

app.get('/api/hello', function(req, res) {
  res.send('Hello');
});

app.post('/api/sms', function(req, res) {
  console.log(req); 
  res.send('Bye');
});

app.listen(PORT, function() {
  console.log('Hackathon App listening');
});
