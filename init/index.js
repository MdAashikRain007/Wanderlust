const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() => {
  console.log("MongoDB connected successfully");
}).catch((err) => {
  console.log(err);
});
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    const dataWithOwner = initData.data.map((obj) => ({
      ...obj,
      owner: "68036d05f093c96401d847f8"
    }));
    await Listing.insertMany(dataWithOwner);
    console.log("Database initialized with sample data.");
  } catch (err) {
    console.error("Error initializing DB:", err);
  }
};

initDB();