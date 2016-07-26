var mymodule = require('./modular.js');

mymodule(process.argv[2],process.argv[3],function(err,list){

  if(err)
  {
    console.log(err)
    return
  }
  for(var index=0;index<list.length;index++)
    console.log(list[index]);
})
