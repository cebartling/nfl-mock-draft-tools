import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from '@apollo/client';
import {useHistory} from "react-router-dom";
import DRAFT_PROSPECT_READ_QUERY from "./DraftProspectReadQuery";
import FootballPositionText from "../../components/FootballPositionText";
import FormInputText from "../../components/FormInputText";
import EnhancedButton from "../../components/EnhancedButton";
import LoadingWidget from "../../components/LoadingWidget";
import ErrorsWidget from "../../components/ErrorsWidget";

const DraftProspectEditorView = (props) => {
    const {draftId, draftProspectId} = useParams();
    const history = useHistory();
    const {loading, error, data} = useQuery(DRAFT_PROSPECT_READ_QUERY, {
        variables: {
            id: draftProspectId
        }
    });

    if (loading) return <LoadingWidget/>;
    if (error) return <ErrorsWidget/>;

    const onClickCancelButton = (evt) => {
        history.push(`/drafts/${draftId}/draftProspects`)
    };

    const onClickSubmitButton = (evt) => {
        console.info("----> onClickSubmitButton fired", evt);
    };


    const {draftProspect} = data;
    // TODO: Get cached query to work.
    // const client = useApolloClient();
    // const {draftProspect} = client.readQuery({query: DRAFT_PROSPECT_READ_QUERY, variables: {id}});

    return (
        <div>
            <h1>{draftProspect.familyName}, {draftProspect.givenName}</h1>
            <h2><FootballPositionText position={draftProspect.position}/> - {draftProspect.college}</h2>
            <hr/>
            <div>
                <form>
                    <FormInputText name={'familyName'}
                                   value={draftProspect.familyName}
                                   labelText={'Family name'}/>
                    <FormInputText name={'givenName'}
                                   value={draftProspect.givenName}
                                   labelText={'Given name'}/>
                    <FormInputText name={'middleName'}
                                   value={draftProspect.middleName}
                                   labelText={'Middle name'}/>
                    <FormInputText name={'birthDate'}
                                   value={draftProspect.birthDate}
                                   labelText={'Birth date'}/>
                    <FormInputText name={'college'}
                                   value={draftProspect.college}
                                   labelText={'College'}
                                   inputCssClassName={'col-sm-5'}/>
                    <FormInputText name={'collegeYear'}
                                   value={draftProspect.collegeYear}
                                   labelText={'Year in college'}/>
                    <FormInputText name={'position'}
                                   value={draftProspect.position}
                                   labelText={'Position'}/>
                    <hr/>
                    <EnhancedButton onClickHandler={onClickCancelButton}
                                    buttonText={'Cancel'}
                                    buttonClassName={'btn btn-secondary mr-2'}/>
                    <EnhancedButton onClickHandler={onClickSubmitButton}
                                    buttonText={'Save'}
                                    buttonClassName={'btn btn-primary'}/>
                </form>
            </div>
        </div>
    );
};

export default DraftProspectEditorView;
