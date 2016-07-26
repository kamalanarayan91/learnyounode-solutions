var http = require('http')
var bl = require('bl')
var op = ['a','b','c']
var count = 0;
var uri = []
uri.push(process.argv[2])
uri.push(process.argv[3])
uri.push(process.argv[4])
uri.forEach(function(item,index)
{

  http.get(item ,function(response)
  {

    response.pipe(bl(function(err,data)
    {
      op[item]= data.toString();
      count++;

      //printing stuff.
      if(count==3)
      for(i=2;i<5;i++)
        console.log(op[process.argv[i]])
    }))


  })
})
