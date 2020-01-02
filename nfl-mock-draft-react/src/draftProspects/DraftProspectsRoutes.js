import React from 'react';
import {Route} from "react-router-dom";
import DraftProspectsView from "./list/DraftProspectsView";
import CreateDraftProspectView from "./detail/CreateDraftProspectView";
import EditDraftProspectView from "./detail/EditDraftProspectView";

const DraftProspectsRoutes = () => {
    return (
        <>
            <Route exact path="/drafts/:draftId/draftProspects">
                <DraftProspectsView/>
            </Route>
            <Route exact path="/drafts/:draftId/draftProspects/new">
                <CreateDraftProspectView/>
            </Route>
            <Route exact path="/drafts/:draftId/draftProspects/:draftProspectId">
                <EditDraftProspectView/>
            </Route>
        </>
    );
};

DraftProspectsRoutes.propTypes = {};

export default DraftProspectsRoutes;
