var express = require('express')
app = express()
module.exports = app

app.use(express.json())

app.get('/:name', (req, res) => {
  req.webtaskContext.store.get(function (error, data) {
      if (error) {
        return res.send(error)  // todo: avoid chatty
      }
      console.log(data, req.params.name)
      var item = data.find((item) => {return item.name == req.params.name})
      console.log(item)
      if (item == null) {
        return res.send()
      }
      return res.send(item)
  })
})

app.post('/', (req, res) => {
  req.webtaskContext.store.get(function (error, data) {
      if (error) {
        return res.send(error)  // todo: avoid chatty
      }
      req.webtaskContext.store.set(data, function (error) {
          if (error) {
            return res.send(error)  // todo: avoid chatty
          }
          console.log(req.body)
          for (item of req.body) {
            put(data, item)
          }
          console.log(data)
          return res.send()
      })
  })

})

function put(data, item) {
  var idx = data.findIndex((i)=>{return i.name == item.name})
  if (idx == -1) {
    data.push(item)
  } else {
    data[idx] = item
  }
}
