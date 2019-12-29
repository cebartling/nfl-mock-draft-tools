import React from 'react';
import {useQuery} from "@apollo/client";
import DRAFTS_QUERY from "./DraftsQuery";
import {Link} from "react-router-dom";

const DraftsView = () => {
    const {loading, error, data} = useQuery(DRAFTS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    const renderDrafts = (drafts) => {
        return drafts.map(({id, year, draftDate}) => {
            const draftProspectRouterLink = `/drafts/${id}/draftProspects`;

            return (
                <div className="row" key={id}>
                    <div className="col-12">
                        <Link to={draftProspectRouterLink} className="btn btn-large btn-primary">{year} Draft</Link>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <h1>Drafts</h1>
            {renderDrafts(data.drafts)}
        </div>
    );
};

export default DraftsView;
