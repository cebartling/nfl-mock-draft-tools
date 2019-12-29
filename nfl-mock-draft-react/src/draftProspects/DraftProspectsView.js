import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import DRAFT_PROSPECTS_QUERY from "./DraftProspectsQuery";

const DraftProspectsView = (props) => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(DRAFT_PROSPECTS_QUERY, {
        variables: {
            annualDraftId: id
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const renderDraftProspects = (draftProspects) => {
        return draftProspects.map(({id, familyName, givenName, position}) => {
            return (
                <div className="row" key={id}>
                    <div className="col-2">
                        {familyName}
                    </div>
                    <div className="col-2">
                        {givenName}
                    </div>
                    <div className="col-1">
                        {position}
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <h1>Draft Prospects</h1>
            {renderDraftProspects(data.draftProspects)}
        </div>
    );
}

export default DraftProspectsView;
