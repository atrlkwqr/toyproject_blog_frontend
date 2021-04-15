import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Body";
import Routes from "./Routes";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Body>
            <Routes />
          </Body>
        </Router>
      </div>
    )
  }
}

export default App;
