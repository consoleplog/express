var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('asdadadsa')
})
app.get('/ppp', function (req, res) {
  console.log('Hello ppp')
})

app.listen(3000,function(){
  console.log('running on port 3000...please visit http://localhost:3000')
})
