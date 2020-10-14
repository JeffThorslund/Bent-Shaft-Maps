const MongoClient = require("mongodb").MongoClient;
const shortid = require("shortid");
const assert = require("assert");
const uri =
  "***REMOVED***";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  const collection = client.db("bent_shaft_maps_dev").collection("rivers");


  
  collection.find({}).toArray(function (err, docs) {
    console.log(docs)
});


  collection.find({}).toArray(function (err, rivers) {
    console.log("Found the following records");

    const rapids = rivers[0].sections[0].rapids;

    for (let rapid of rapids) {
      let oldRapidId = rapid.id;
      let newRapidId = `rapid_${shortid.generate()}`;

      collection.updateOne({}, {$set: {name: "Ottawa Riverr"}}, function(err, r) {
        assert.equal(null, err);
        assert.equal(1, r.matchedCount);
        assert.equal(1, r.modifiedCount);
      })

      console.log(oldRapidId, newRapidId);
    }
  });

  client.close();
});
