import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    fetch('products')
      .then(res => res.json())
      .then((res) => {
        setProducts(res.data);
        setIsFetching(false);
      })
      .catch(err => setIsFetching(false));
  }, []);

  return (
    <div>
      {products.map((product, i) => <div key={i} >product.name</div>)}
    </div>
  );
};

export default Product;
