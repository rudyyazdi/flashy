import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

interface Iproduct {
  price: number;
  name: string;
  // _id: string;
}

const productSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup
    .number()
    .required()
    .positive()
    .integer(),
});


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

const New: React.FC<{setIsLoading: React.Dispatch<boolean>; isLoading: boolean}> = ({ setIsLoading, isLoading }) => {
  const formStyle: React.CSSProperties = {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    width: "300px"
  };

  const onSubmit = (values: Iproduct) => {
    setIsLoading(true);
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', price: 0 }}
        validationSchema={productSchema}
        onSubmit={onSubmit}
      >
        <Form style={formStyle}>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
          <Field type="price" name="price" />
          <ErrorMessage name="price" component="div" />
          <div>
            <button type="submit" disabled={isLoading}>
              Submit
            </button>
            <Link to="/products">
              <button>
                <span>back</span>
              </button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

const Product = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      {isLoading && "Loading ..."}
      <Switch>
        <Route path="/products/new" render={() => <New setIsLoading={setIsLoading} isLoading={isLoading} />} />
        <Route render={() => <List setIsLoading={setIsLoading}  />} />
      </Switch>
    </div>
  );
};

export default Product;
