var fs = require('fs')
var path =require('path')
var dirpath = process.argv[2]
var extension = process.argv[3]


fs.readdir(dirpath,function callback(err,list)
{
  for(var index=0;index<list.length;index++)
  {
    var file = list[index];
    if(path.extname(file) == '.'+extension)
    console.log(file)
  }

})
