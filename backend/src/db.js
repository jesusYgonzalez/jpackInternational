const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jesusGonzalez:sMWYP92AZeq3RTxk@jpack-international-zktep.mongodb.net/admin", { useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
  })
  .catch(() => {
    console.log('connection failed');
  });

//sMWYP92AZeq3RTxk

module.exports = mongoose;

//mongodb+srv://jesusGonzalez:sMWYP92AZeq3RTxk@jpack-international-zktep.mongodb.net/jpack-International
