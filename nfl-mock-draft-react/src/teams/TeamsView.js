import React from 'react';
import {useQuery} from '@apollo/client';
import TEAMS_QUERY from "./TeamsQuery";

const TeamsView = () => {
    const {loading, error, data} = useQuery(TEAMS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    const renderTeams = (teams) => {
        return teams.map(({id, name}) => (
            <div key={id}>
                {name}
            </div>
        ));
    }

    return (
        <div>
            <h1>Teams</h1>
            {renderTeams(data.teams)}
        </div>
    );
};

export default TeamsView;
