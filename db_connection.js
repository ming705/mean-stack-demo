/**
 * Created by ming on 5/8/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var currentConn = null;

exports.getDBConnection = function(callback){
    if (currentConn) {
        callback(currentConn);
    } else {
        MongoClient.connect("mongodb://localhost/", function(err, db) {
            callback(db.db("myapp"));
        });
    }
};