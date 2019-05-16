var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    hosts: [ 'http://admin:z3r3br@l@166.70.118.99:31920/'],
    log: 'trace'
 });


 module.exports = client;


//  module.exports = {


//     first:function(req,res){
//         client.search({  
//             index: 'seed_target',
//             type: '_doc',
//             body: {
//               size:10000,
//               query: {          
//                 match: { 
//                     "status": "active" 
//                 }
//               },
//             }
//           },function (error, response,status) {
//               if (error){
//                 console.log("search error: "+error)
//               }
//               else {
//                 console.log("--- Response ---");
//                 console.log(response);
//                 console.log("--- Hits ---");
//              response.hits.hits.forEach(function(hit){
//                console.log(hit);
//                 })
//               }
//           });
//     }

//  };