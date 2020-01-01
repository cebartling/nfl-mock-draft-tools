import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from '@apollo/client';
import DRAFT_PROSPECT_READ_QUERY from "./DraftProspectReadQuery";

const DraftProspectEditorView = (props) => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(DRAFT_PROSPECT_READ_QUERY, {variables: {id}});
    // const client = useApolloClient();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const {draftProspect} = data;
    // TODO: Get cached query to work.
    // const {draftProspect} = client.readQuery({query: DRAFT_PROSPECT_READ_QUERY, variables: {id}});

    return (
        <div>
            <h1>Draft Prospect Edit</h1>
            <div>Draft prospect ID: {draftProspect.id}</div>
        </div>
    );
};

export default DraftProspectEditorView;
