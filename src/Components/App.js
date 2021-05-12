import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { useQuery} from "@apollo/client";
import Body from "./Body";
import Routes from "./Routes";
import {LOCAL_LOGGED_IN_QUERY} from "../sharedQueries";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const App = () => {

    const {data: {
            isLoggedIn
        }} = useQuery(LOCAL_LOGGED_IN_QUERY);

    return (
        <div className="App">
            <Router>
                <Body>
                    <Header />
                    <Routes isLoggedIn={isLoggedIn}/>
                    <Footer />
                </Body>
            </Router>
        </div>
    )
}

export default App;
