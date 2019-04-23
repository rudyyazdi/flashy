import mongoose from "mongoose";

const dbConn = mongoose.createConnection(
  "mongodb://127.0.0.1:27017/flashy",
  { useNewUrlParser: true }
);

export default dbConn;
