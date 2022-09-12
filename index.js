 var MongoClient = require('mongodb').MongoClient;

 var URL = 'mongodb+srv://Arifdemo:Ez1LWKiC5THVSzFF@cluster0.ldypdcb.mongodb.net/?retryWrites=true&w=majority';
 

 MongoClient.connect(URL,function(error){
    if(error){
        console.log("Connection Fail");
    }else{
        console.log("Connection Success");

    }
 })