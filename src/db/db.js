import mongoose from "mongoose";

import "dotenv/config";

import { DB_NAME } from "../constant.js";

const connectDb = async () => {
  try {
    const connecInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log("\n mongodb connected", connecInstance.connection.host);
  } catch (error) {
    console.log("got an error in connection section", error);
    process.exit(1);
  }
};

export default connectDb;
