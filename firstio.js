var fs = require('fs')
var fileContents = fs.readFileSync(process.argv[2])
console.log(fileContents.toString().split("\n").length-1)
