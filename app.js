var client = require('./index.js');
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
        console.log("--- Hits ---");
    //    response.hits.hits.forEach(function(hit){
      //  console.log(hit);
        console.log(response.hits.hits);
        
      //  })
      }
  });