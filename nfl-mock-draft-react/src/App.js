import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import DraftsView from "./drafts/DraftsView";
import TeamsView from "./teams/TeamsView";
import StickyFooter from "./components/StickyFooter";
import {ApolloProvider} from "@apollo/client";
import client from "./ApolloClient";

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Navigation/>

                <main role="main" className="container-fluid mt-5">
                    <Switch>
                        <Route exact path="/">
                            <HomeView/>
                        </Route>
                        <Route path="/teams">
                            <TeamsView/>
                        </Route>
                        <Route path="/drafts">
                            <DraftsView/>
                        </Route>
                    </Switch>
                </main>

                <StickyFooter/>
            </Router>
        </ApolloProvider>
    );
}

export default App;
