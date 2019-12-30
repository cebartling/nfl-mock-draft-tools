import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import DRAFT_PROSPECTS_QUERY from "./DraftProspectsQuery";
import CollegeYearText from "../components/CollegeYearText";
import FootballPositionText from "../components/FootballPositionText";

const DraftProspectsView = () => {
    const {id} = useParams();
    const {loading, error, data} = useQuery(DRAFT_PROSPECTS_QUERY, {
        variables: {
            annualDraftId: id
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const renderDraftProspect = ({id, familyName, givenName, position, college, collegeYear}) => {
        return (
            <tr key={id}>
                <td>{familyName}</td>
                <td>{givenName}</td>
                <td>{college}</td>
                <td><CollegeYearText collegeYear={collegeYear}/></td>
                <td><FootballPositionText position={position}/></td>
            </tr>
        );
    };

    return (
        <div>
            <h1>Draft Prospects</h1>
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th>Family name</th>
                    <th>Given name</th>
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
