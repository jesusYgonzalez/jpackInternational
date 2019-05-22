const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/jpackInternational:",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("connection failed");
  });

module.exports = mongoose;

//mongodb+srv://jesusGonzalez:sMWYP92AZeq3RTxk@jpack-international-zktep.mongodb.net/jpack-International


//RESOURCES//
//mongoimport
// --host jpack-international-shard-00-00-zktep.mongodb.net:27017 --db jpack-international --type json --file ~/Downloads/convert2Json/ --jsonArray --authenticadionDatabase admin --ssl --username jesusGonzalez --password sMWYP92AZeq3RTxk

//connect to mongo Atlas in shell
// mongo "mongodb+srv://jpack-international-zktep.mongodb.net/test" --username jesusGonzalez <password> sMWYP92AZeq3RTxk
