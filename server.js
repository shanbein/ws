var app = require('./store')
var store = require('./wt-store')

var port = 3000

mockStore = (req, res, next) => {
  req.webtaskContext = {store: store}
  next()
}

app.use(mockStore)
var last = app._router.stack.pop()
app._router.stack = [last].concat(app._router.stack)

app.listen(port)
