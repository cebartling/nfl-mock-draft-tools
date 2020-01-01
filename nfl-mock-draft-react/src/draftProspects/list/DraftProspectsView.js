import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import DRAFT_PROSPECTS_QUERY from "./DraftProspectsQuery";
import CollegeYearText from "../../components/CollegeYearText";
import FootballPositionText from "../../components/FootballPositionText";

const DraftProspectsView = () => {
    const {draftId} = useParams();
    const {loading, error, data} = useQuery(DRAFT_PROSPECTS_QUERY, {
        variables: {
            annualDraftId: draftId
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const renderDraftProspect = ({id, familyName, givenName, position, college, collegeYear}) => {
        const draftProspectEditorViewUrl = `/drafts/${draftId}/draftProspects/${id}`;

        return (
            <tr key={id}>
                <td><Link to={draftProspectEditorViewUrl}>{familyName}, {givenName}</Link></td>
                <td>{college}</td>
                <td><CollegeYearText collegeYear={collegeYear}/></td>
                <td><FootballPositionText position={position}/></td>
            </tr>
        );
    };

    return (
        <div>
            <h1>Draft Prospects</h1>
            <table className="table table-bordered table-hover table-striped">
                <thead>
                <tr>
                    <th>Full name</th>
                    <th>College</th>
                    <th>Year in College</th>
                    <th>Position</th>
                </tr>
                </thead>
                <tbody>
                {data.draftProspects.map(renderDraftProspect)}
                </tbody>
            </table>
        </div>
    );
}

export default DraftProspectsView;
