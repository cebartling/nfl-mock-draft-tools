import React from 'react';
import {useParams} from "react-router-dom";
import DraftProspectEditorForm from "./DraftProspectEditorForm";

const CreateDraftProspectView = () => {
    const {draftId} = useParams();

    return (
        <div>
            <h1>Create new draft prospect</h1>
            <hr/>
            <DraftProspectEditorForm draftId={draftId}/>
        </div>
    );
};

export default CreateDraftProspectView;
