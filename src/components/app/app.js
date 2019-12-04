import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./app.css";
import Footer from "../footer";
import MainPage from "../pages/mainPage";
import CoffeePage from "../pages/coffeePage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route path ="/" exact component={MainPage}/>
        <Route path="/coffeepage" component={CoffeePage}/>
        <Footer />
      </Router>
    );
  }
}
