import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={props => <Products sortBy="newest" {...props} />}
            />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/admin" component={Dashboard} />
            <Redirect from="/messages" to="/posts" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

//-----------Notes------------//

// the Route component looks at the URL and if it matchs the "/products" pattern then it will render the Products component and so on down the line with the rest of the components

// using 'exact' will help so that the Home Component isnt rendered everytime, it will only be renedered if there is only '/' in the URL

// by using Switch it will render the first child that matches the location in the URL so then you dont need to have 'exact'

// when you use the Route component it also passes 3 props with it, this is something that can be viewed with more detail by using inspect in the browser

// you are able to create custom props for your components by following the example made for the Products component above. By adding {...props} that will allow you to see allof the props that are available to that component

// when you append a ? at the end of an expression then that means that, that expression is optional (the ? is a part of regex)

// Redirect can be helpful because it does what it says, it will redirect a certain URL path to another automatically
