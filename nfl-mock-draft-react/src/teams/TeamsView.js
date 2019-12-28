import React from 'react';
import {useQuery} from '@apollo/client';
import TEAMS_QUERY from "./TeamsQuery";

const TeamsView = () => {
    const {loading, error, data} = useQuery(TEAMS_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    const renderTeams = (teams) => {
        return teams.map(({id, name, svgLogoUrl}) => (
            <div className="row" key={id}>
                <div className="col-12">
                    <img src={`${process.env.REACT_APP_ASSETS_BASE}${svgLogoUrl}`} height="80" width="80"
                         alt={name}/> {name}
                </div>
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
