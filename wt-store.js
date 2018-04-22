var _data = {"a": 1}

var get = (cb) => {
  var error = null
  data = _data
  return cb(error, data)
}

var set = (data, cb) => {
  var error = null
  return cb(error)
}


get(function (error, data) {
    if (error) return cb(error);
    console.log(data)
})

get(function (error, data) {
    if (error) return cb(error);
    set(data, function (error) {
        if (error) return cb(error);
        data.b = 2
    });
})

get(function (error, data) {
    if (error) return cb(error);
    console.log(data)
})
