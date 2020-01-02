import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from '@apollo/client';
import DRAFT_PROSPECT_READ_QUERY from "./DraftProspectReadQuery";
import FootballPositionText from "../../components/FootballPositionText";
import LoadingWidget from "../../components/LoadingWidget";
import ErrorsWidget from "../../components/ErrorsWidget";
import DraftProspectEditorForm from "./DraftProspectEditorForm";

const EditDraftProspectView = () => {
    const {draftId, draftProspectId} = useParams();
    const {loading, error, data} = useQuery(DRAFT_PROSPECT_READ_QUERY, {
        variables: {
            id: draftProspectId
        }
    });

    if (loading) return <LoadingWidget/>;
    if (error) return <ErrorsWidget/>;

    const {draftProspect} = data;
    // TODO: Get cached query to work.
    // const client = useApolloClient();
    // const {draftProspect} = client.readQuery({query: DRAFT_PROSPECT_READ_QUERY, variables: {id}});

    return (
        <div>
            <h1>{draftProspect.familyName}, {draftProspect.givenName}</h1>
            <h2><FootballPositionText position={draftProspect.position}/> - {draftProspect.college}</h2>
            <hr/>
            <DraftProspectEditorForm draftId={draftId} draftProspect={draftProspect}/>
        </div>
    );
};

export default EditDraftProspectView;
