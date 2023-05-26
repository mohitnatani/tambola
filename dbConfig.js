const mongoose = require("mongoose");

async function initDB() {
  try {
      //console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL, { dbName: 'tambola' })
    console.log("Connected to DB Successfully")
  } catch (err) {
    console.log("Error Connecting to DB")
    //console.log(err);
    process.exit()
  }
}
module.exports = {
  initDB
}