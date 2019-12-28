import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import DraftsView from "./views/DraftsView";
import TeamsView from "./views/TeamsView";
import StickyFooter from "./components/StickyFooter";

function App() {
    return (
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
    );
}

export default App;