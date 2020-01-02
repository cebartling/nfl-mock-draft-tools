import React from 'react';
import {Route} from "react-router-dom";
import DraftsView from "./DraftsView";

const DraftsRoutes = () => {
    return (
        <>
            <Route exact path="/drafts">
                <DraftsView/>
            </Route>
        </>
    );
};

DraftsRoutes.propTypes = {};

export default DraftsRoutes;
