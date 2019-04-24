import React, { useState, useEffect } from "react";

interface Iproduct {
  price: number;
  name: string;
  _id: string;
}

const Product = () => {
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('products')
      .then(res => res.json())
      .then(res => res as {data: Iproduct[]})
      .then((res) => {
        setProducts(res.data);
        setIsFetching(false);
      })
      .catch(err => setIsFetching(false));
  }, []);

  return (
    <div>
      {products.map((product, i) => <div key={i}>{product.name}</div>)}
    </div>
  );
};

export default Product;
