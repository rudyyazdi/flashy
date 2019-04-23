import mongoose from "mongoose";

import dbConn from "../dbConn"

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = dbConn.model('Product', productSchema);

export default Product;
