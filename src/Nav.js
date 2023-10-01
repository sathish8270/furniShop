import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Navbar from "./Components/Navbar";

function Nav() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />;
        <Route path="/about" component={About} />
        <Route path="/categories" component={Categories} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}
export default Nav;
