var http=require('http')
var url = require('url')

var server = http.createServer(function(req,res)
  {
      if(req.method=='GET')
      {
        var urlobject = url.parse(req.url,true);


        console.log('')
        if(urlobject.pathname=="/api/parsetime")
        {

          var query = urlobject.query;
          var isoTimeString = query['iso']
          var dateParam = new Date(isoTimeString);
          var hour = dateParam.getHours();
          var minutes = dateParam.getMinutes();
          var seconds = dateParam.getSeconds();
          var json=new Object;
          json['hour'] = hour
          json['minute']= minutes
          json['second'] = seconds

          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(json))
        }

        if(urlobject.pathname=="/api/unixtime")
        {
          var isoTimeString = urlobject.query.iso;
          var dateParam = new Date(isoTimeString);
          var unixtime = dateParam.getTime();
          var json= new Object;
          json['unixtime'] = unixtime
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(json))
        }
      }

  });




server.listen(process.argv[2])
