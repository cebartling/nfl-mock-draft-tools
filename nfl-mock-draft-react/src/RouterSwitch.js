import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomeView from "./views/HomeView";
import TeamsView from "./teams/TeamsView";
import DraftsView from "./drafts/DraftsView";
import DraftProspectsView from "./draftProspects/list/DraftProspectsView";
import DraftProspectEditorView from "./draftProspects/detail/DraftProspectEditorView";

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
            <Route exact path="/drafts/:draftId/draftProspects/:draftProspectId">
                <DraftProspectEditorView/>
            </Route>
        </Switch>
    );
}

export default RouterSwitch;
