const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Connected to MONGO DB`.cyan.underline.bold);
  } catch (error) {
    console.log(`Error ${error.message}`.red);
    process.exit(1);
  }
};
module.exports = connectDb;
