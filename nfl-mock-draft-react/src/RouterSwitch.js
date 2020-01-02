import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeView from "./views/HomeView";
import TeamsView from "./teams/TeamsView";
import DraftsView from "./drafts/DraftsView";
import DraftProspectsView from "./draftProspects/list/DraftProspectsView";
import EditDraftProspectView from "./draftProspects/detail/EditDraftProspectView";
import CreateDraftProspectView from "./draftProspects/detail/CreateDraftProspectView";

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
            <Route exact path="/drafts/:draftId/draftProspects">
                <DraftProspectsView/>
            </Route>
            <Route exact path="/drafts/:draftId/draftProspects/new">
                <CreateDraftProspectView/>
            </Route>
            <Route exact path="/drafts/:draftId/draftProspects/:draftProspectId">
                <EditDraftProspectView/>
            </Route>
        </Switch>
    );
};

export default RouterSwitch;
