import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

interface Iproduct {
  price: number;
  name: string;
  _id: string;
}

const List: React.FC<{setIsLoading: React.Dispatch<boolean>}> = ({ setIsLoading }) => {
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
      <Link to="/products/new">new</Link>
      {products.map((product, i) => <div key={i}>{product.name}</div>)}
    </div>
  );
};

const New: React.FC<{setIsLoading: React.Dispatch<boolean>}> = ({ setIsLoading }) => {
  return (
    <div>
      <Link to="/products">back</Link>
    </div>
  );
};

const Product = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      {isLoading && "Loading ..."}
      <Switch>
        <Route path="/products/new" render={() => <New setIsLoading={setIsLoading} />} />
        <Route render={() => <List setIsLoading={setIsLoading} />} />
      </Switch>
    </div>
  );
};

export default Product;
