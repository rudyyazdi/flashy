import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import Product from "./Product";

const App = () => (<div className="App">
  <BrowserRouter>
    <Link to="/products">products</Link>
    <Route exact path="/products" component={Product} />
  </BrowserRouter>
</div>)

export default App;
