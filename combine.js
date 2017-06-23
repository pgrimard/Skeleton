var fs = require('fs')

var normalize = fs.createReadStream('./css/normalize.css')
var skeleton = fs.createReadStream('./css/skeleton.css')
var combined = fs.createWriteStream('./combined.css')

normalize.pipe(combined)
skeleton.pipe(combined)
