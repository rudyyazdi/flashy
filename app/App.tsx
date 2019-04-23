import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import Product from "./Product";

const navStyle = {
  display: "flex",
  height: "3em",
  alignItems: "center",
  padding: "1em",
  boxShadow: "1px 1px 5px grey"
}

const navLinkStyle = {
  margin: "5px"
}

const App = () => (<div className="App">
  <BrowserRouter>
    <div style={navStyle} >
      <Link to="/" style={navLinkStyle}>home</Link>
      <Link to="/products" style={navLinkStyle}>products</Link>
    </div>
    <Route exact={true} path="/products" component={Product} />
  </BrowserRouter>
</div>)

export default App;
