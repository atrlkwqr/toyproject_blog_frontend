import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Body from "./Body";
import Routes from "./Routes";

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

class App extends Component {
  render(){
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Router>
            <Body>
              <Routes />
            </Body>
          </Router>
        </ApolloProvider>
      </div>
    )
  }
}

export default App;
