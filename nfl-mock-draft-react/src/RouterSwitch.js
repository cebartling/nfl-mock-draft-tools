import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeView from "./views/HomeView";
import TeamsView from "./teams/TeamsView";
import DraftProspectsRoutes from "./draftProspects/DraftProspectsRoutes";
import DraftsRoutes from "./drafts/DraftsRoutes";

const RouterSwitch = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomeView/>
            </Route>
            <Route exact path="/teams">
                <TeamsView/>
            </Route>
            <DraftsRoutes/>
            <DraftProspectsRoutes/>
        </Switch>
    );
}

export default RouterSwitch;
