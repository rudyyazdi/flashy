import { expect } from "chai";

import Product from "../product"

it("validates", (done) => {
  const product = new Product();
  product.save()
    .catch(({ errors }) => {
      expect(errors.name.message).eq("Path `name` is required.");
      expect(errors.price.message).eq("Path `price` is required.");
      done();
    });
});

it("creates the product", (done) => {
  const name = 'mixer';
  const price = 200;

  const product = new Product({ name, price });
  product.save()
    .then((pr) => {
      expect(pr.get('name')).eq(name);
      expect(pr.get('price')).eq(price);
      done();
    });
});
