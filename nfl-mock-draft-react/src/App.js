import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "./ApolloClient";
import Navigation from "./components/Navigation";
import StickyFooter from "./components/StickyFooter";
import RouterSwitch from "./RouterSwitch";

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Navigation/>

                <main role="main" className="container-fluid mt-5">
                    <RouterSwitch/>
                </main>

                <StickyFooter/>
            </Router>
        </ApolloProvider>
    );
}

export default App;
