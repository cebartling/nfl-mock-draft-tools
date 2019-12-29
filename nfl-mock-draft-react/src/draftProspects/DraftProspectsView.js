import React from 'react';
import {useParams} from "react-router-dom";

const DraftProspectsView = (props) => {
    const {id} = useParams();

    return (
        <div>
            <h1>Draft Prospects</h1>
            <div>Draft id: {id}</div>
        </div>
    );
}

export default DraftProspectsView;
