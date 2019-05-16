const writeFile = require('fs').writeFile;
const csvjson = require('csvjson');
const output = process.env.OUTPUT

var client = require('./index.js');

function callcsv(data)
{

    var jsondata = data;
    const csvdata=csvjson.toCSV(jsondata,{ headers:'key'});
    writeFile(output,csvdata,function(err){
              if(err)
              {
              console.log(err);
              throw new Error(err);
              }
        console.log("Please check you output file");
    });
}

if(!output)
{
    console.log("Plese provide your output file :");
}

if(!client)
{
    console.log("Cluster is Down ... !!!Please contact your service administration..");
}

client.search({  
    index: 'seed_target',
    type: '_doc',
    body: {
      size:10000,
      query: {          
        match: { 
            "status": "active" 
        }
      },
    }
  },function (error, response,status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("size listing of doc " +response.hits.hits.size)
        console.log("--- Hits ---");
    //  response.hits.hits.forEach(function(hit){
    //    console.log(hit);
    //     })
        console.log("total listing of doc " + response.hits.total)
        callcsv(response)

      }
  });