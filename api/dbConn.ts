import mongoose from "mongoose";

const DB_URL = process.env.DB_URL || "";

const dbConn = mongoose.createConnection(
  DB_URL,
  { useNewUrlParser: true },
);

export default dbConn;
