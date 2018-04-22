var express = require('express')
app = express()
module.exports = app

app.use(express.json())
app.get('/:name', (req, res) => {
  console.log(req.webtaskContext)
  return res.send(req.params)
})
app.post('/', (req, res) => {
  return res.send(req.body)
})
