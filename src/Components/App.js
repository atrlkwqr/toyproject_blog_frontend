import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Routes from "./Routes";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Body>
          <Routes></Routes>
        </Body>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
