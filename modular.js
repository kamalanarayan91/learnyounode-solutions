
function func(dirpath,extension,callback)
{
  var fs = require('fs');
  var path = require('path')
  fs.readdir(dirpath,function(err,list)
  {
    if(err)
    {
      callback(err)
      return
    }
    var result = [];

    for(var index=0;index<list.length;index++)
    {
      var file = list[index];
      if(path.extname(file) == '.'+extension)
        result.push(file);
    }

    callback(err,result);
  })
}

module.exports = func;
