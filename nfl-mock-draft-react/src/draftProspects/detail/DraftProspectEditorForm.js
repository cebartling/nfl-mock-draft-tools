import React, {useState} from 'react';
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import FormInputText from "../../components/FormInputText";
import EnhancedButton from "../../components/EnhancedButton";

const DraftProspectEditorForm = (props) => {
    const {draftProspect, draftId} = props;
    const history = useHistory();
    const [familyName, setFamilyName] = useState(draftProspect ? draftProspect.familyName : '');
    const [givenName, setGivenName] = useState(draftProspect ? draftProspect.givenName : '');
    const [middleName, setMiddleName] = useState(draftProspect && draftProspect.middleName ? draftProspect.middleName : '');
    const [birthDate, setBirthDate] = useState(draftProspect ? draftProspect.birthDate : '');
    const [college, setCollege] = useState(draftProspect ? draftProspect.college : '');
    const [collegeYear, setCollegeYear] = useState(draftProspect ? draftProspect.collegeYear : '');
    const [position, setPosition] = useState(draftProspect ? draftProspect.position : '');

    const onClickCancelButton = () => {
        history.push(`/drafts/${draftId}/draftProspects`)
    };

    const onClickSubmitButton = (evt) => {
        console.info("----> onClickSubmitButton fired", evt);
        console.info('        Family name', familyName);
        console.info('        Given name', givenName);
        console.info('        Middle name', middleName);
        console.info('        Birth date', birthDate);
        console.info('        College', college);
        console.info('        College Year', collegeYear);
        console.info('        Position', position);
    };

    return (
        <div>
            <form>
                <FormInputText name={'familyName'}
                               value={familyName}
                               labelText={'Family name'}
                               onChange={e => setFamilyName(e.target.value)}/>
                <FormInputText name={'givenName'}
                               value={givenName}
                               labelText={'Given name'}
                               onChange={e => setGivenName(e.target.value)}/>
                <FormInputText name={'middleName'}
                               value={middleName}
                               labelText={'Middle name'}
                               onChange={e => setMiddleName(e.target.value)}/>
                <FormInputText name={'birthDate'}
                               value={birthDate}
                               labelText={'Birth date'}
                               onChange={e => setBirthDate(e.target.value)}/>
                <FormInputText name={'college'}
                               value={college}
                               labelText={'College'}
                               inputCssClassName={'col-sm-5'}
                               onChange={e => setCollege(e.target.value)}/>
                <FormInputText name={'collegeYear'}
                               value={collegeYear}
                               labelText={'Year in college'}
                               onChange={e => setCollegeYear(e.target.value)}/>
                <FormInputText name={'position'}
                               value={position}
                               labelText={'Position'}
                               onChange={e => setPosition(e.target.value)}/>
                <hr/>
                <EnhancedButton onClickHandler={onClickCancelButton}
                                buttonText={'Cancel'}
                                buttonClassName={'btn btn-secondary mr-2'}/>
                <EnhancedButton onClickHandler={onClickSubmitButton}
                                buttonText={'Save'}
                                buttonClassName={'btn btn-primary'}/>
            </form>
        </div>
    );
};

DraftProspectEditorForm.propTypes = {
    draftId: PropTypes.string.isRequired,
    draftProspect: PropTypes.object
};

export default DraftProspectEditorForm;
