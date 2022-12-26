import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = process.env.DATABASE;

  try {
    // 1 - Current URL string parser is deprecated, and will be removed in a future version.
    // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.
    mongoose.set("strictQuery", false);
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
