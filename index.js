var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
    hosts: [ 'http://admin:z3r3br@l@166.70.118.99:31920/'],
    log: 'trace'
 });


 module.exports = client;