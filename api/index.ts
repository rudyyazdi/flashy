import express from "express";

import "../config/env"
import { Product } from "./models"

const app = express();
const port: number = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/products", (req, res) => {
  Product
    .find()
    .then((products) => {
      res.send({ data: products });
    });
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${ port }`);
});
