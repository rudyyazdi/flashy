import mongoose from "mongoose";

import dbConn from "../dbConn"

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = dbConn.model('Product', productSchema);

export default Product;
