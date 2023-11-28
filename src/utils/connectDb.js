const mongoose = require("mongoose");
const config = require("../config/config"); 

module.exports.connectToDataBase = async () => {
  try {
    const options = {  
      dbName: config.get("mongodb").name,
    };

    //set user and pass for production
    if (process.env.RUN_LOCAL !== "1") {
      options.pass = config.get("mongodb").password;
      options.user = config.get("mongodb").username;
    }
    mongoose.set('strictQuery', false);
    await mongoose.connect(config.get("mongodb").host, options); 
    console.log(`database is run`);
  } catch (err) {
    console.error("could not connect to MongoDB...", err);
  }
};
 
