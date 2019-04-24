import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

interface Iproduct {
  price: number;
  name: string;
  _id: string;
}

const Index: React.FC<{setIsLoading: React.Dispatch<boolean>}> = ({ setIsLoading }) => {
  const [products, setProducts] = useState<Iproduct[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('products')
      .then(res => res.json())
      .then(res => res as {data: Iproduct[]})
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(err => setIsLoading(false));
  }, []);

  return (
    <div>
      <Link to="products/new">new</Link>
      {products.map((product, i) => <div key={i}>{product.name}</div>)}
    </div>
  );
};

const Product = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      {isLoading && "Loading ..."}
      <Index setIsLoading={setIsLoading} />
    </div>
  );
};

export default Product;
