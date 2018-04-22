// var _data = new Map()
// _data.set('a', 1)
// _data.set('name', 'foo')

var _data = []
_data.push({name:"foo", age:"bar"})

var get = (cb) => {
  var error = null
  data = _data
  return cb(error, data)
}

var set = (data, cb) => {
  var error = null
  return cb(error)
}

module.exports.get = get
module.exports.set = set


// get(function (error, data) {
//     if (error) return cb(error);
//     console.log(data)
// })
//
// get(function (error, data) {
//     if (error) return cb(error);
//     set(data, function (error) {
//         if (error) return cb(error);
//         data.b = 2
//     });
// })
//
// get(function (error, data) {
//     if (error) return cb(error);
//     console.log(data)
// })
