var express = require('express')
var app = express()

// app.get('/', function (req, res) {
//   var page = '<html>' + '<body>' + '<h1>Index.html</h1>' +'</body>' + '</html>'
//   res.send(page)
//   console.log(page)
// })
app.get('/about', function (req, res) {
  var page = '<html>' + '<body>' + '</body>' + '</html>'
  res.send(page)
  console.log('Hello ppp')
})

app.get('/:name', function (req, res) {
  var username =req.params.name
  var page = '<html>' + '<body>' + '<h1>'+ username +' de car '+ '</h1>' +'</body>' + '</html>'
  res.send(page)
  console.log(req)
})
app.post('/:name', function (req, res) {

  res.send("a POST request received" + req.params.name)
  console.log('Hello ppp')
})
app.listen(3000,function(){
  console.log('running on port 3000...please visit http://localhost:3000')
})
