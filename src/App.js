import React, { Component } from 'react';
import {BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import appRoutes from './routes';

import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

const routes = appRoutes();

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <header>
                <Header />
              </header>
              {routes}
          </div>
        </Router>
    );
  }
}

export default App;
