const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);
 
var _db;
 
module.exports = {
  connectToServer: async (callback) => {
    await client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("Calendar");
        console.log("Successfully connected to MongoDB."); 
      }
      else
      {
        console.log("Something wrong");
        return callback(err);
      }
      
         });
         console.log("Successfully connected to MongoDB."); 
  },
 
  getDb: function () {
    return _db;
  },
};