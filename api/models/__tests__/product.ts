import { expect } from "chai";

import Product from "../product"

it("creates the product", () => {
  const product = new Product();
  product.save();
  expect(product._id).not.eq(undefined);
});
