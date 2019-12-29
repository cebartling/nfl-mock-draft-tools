import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import client from "./ApolloClient";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import DraftsView from "./drafts/DraftsView";
import TeamsView from "./teams/TeamsView";
import StickyFooter from "./components/StickyFooter";
import DraftProspectsView from "./draftProspects/DraftProspectsView";

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
                        <Route exact path="/teams">
                            <TeamsView/>
                        </Route>
                        <Route exact path="/drafts">
                            <DraftsView/>
                        </Route>
                        <Route exact path="/drafts/:id/draftProspects">
                            <DraftProspectsView/>
                        </Route>
                    </Switch>
                </main>

                <StickyFooter/>
            </Router>
        </ApolloProvider>
    );
}

export default App;
