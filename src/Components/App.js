import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { useQuery} from "@apollo/client";
import Body from "./Body";
import Routes from "./Routes";
import {LOCAL_LOGGED_IN_QUERY} from "../sharedQueries";

const App = () => {

    const {data: {
            isLoggedIn
        }} = useQuery(LOCAL_LOGGED_IN_QUERY);

    return (
        <div className="App">
            <Router>
                <Body>
                    <Routes isLoggedIn={isLoggedIn}/>
                </Body>
            </Router>
        </div>
    )
}

export default App;
