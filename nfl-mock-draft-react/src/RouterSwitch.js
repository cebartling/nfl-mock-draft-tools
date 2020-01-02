import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeView from "./views/HomeView";
import TeamsView from "./teams/TeamsView";
import DraftsView from "./drafts/DraftsView";
import DraftProspectsRoutes from "./draftProspects/DraftProspectsRoutes";

const RouterSwitch = () => {
    return (
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
            <DraftProspectsRoutes/>
        </Switch>
    );
}

export default RouterSwitch;
