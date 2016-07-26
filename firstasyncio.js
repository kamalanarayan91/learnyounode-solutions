var fs = require('fs')


fs.readFile(process.argv[2],function done(err,fileContents) {
    console.log(fileContents.toString().split("\n").length-1)
})
