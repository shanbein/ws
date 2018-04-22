var _data
// _data = {list: []}
// _data.list.push({name:"foo", age:"bar"})

var get = (cb) => {
  var err
  data = _data
  return cb(err, data)
}

var set = (data, cb) => {
  var err
  _data = data
  return cb(err)
}

module.exports = {get: get, set: set}
