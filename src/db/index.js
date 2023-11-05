import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
      const connectReady=  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

      console.log(`MongoDB connet !! DB HOST : ${connectReady.connection.host }`);

    } catch (error) {
        console.log("MONGODB ERROR :", error);
        process.exit(1)
    }
};

export default connectDB