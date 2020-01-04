import React, {useState} from 'react';
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {map} from "lodash";
import LoadingWidget from "../../components/LoadingWidget";
import ErrorsWidget from "../../components/ErrorsWidget";
import FormSelect from "../../components/FormSelect";
import FormInputText from "../../components/FormInputText";
import EnhancedButton from "../../components/EnhancedButton";
import FormDateInput from "../../components/FormDateInput";
import COLLEGE_YEAR_ENUM_VALUES_QUERY from "../../graphql/queries/CollegeYearEnumValuesQuery";
import FOOTBALL_POSITION_ENUM_VALUES_QUERY from "../../graphql/queries/FootballPositionEnumValuesQuery";

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
    const {
        loading: collegeYearLoading,
        error: collegeYearError,
        data: collegeYearData
    } = useQuery(COLLEGE_YEAR_ENUM_VALUES_QUERY);
    const {
        loading: footballPositionLoading,
        error: footballPositionError,
        data: footballPositionData
    } = useQuery(FOOTBALL_POSITION_ENUM_VALUES_QUERY);

    if (collegeYearLoading || footballPositionLoading) return <LoadingWidget/>;
    if (collegeYearError || footballPositionError) return <ErrorsWidget/>;

    const {'__type': {enumValues: collegeYearEnumValues}} = collegeYearData;
    const collegeYearEnumMaps = map(collegeYearEnumValues, item => ({value: item.name, label: item.description}));
    const {'__type': {enumValues: footballPositionEnumValues}} = footballPositionData;
    const footballPositionEnumMaps = map(footballPositionEnumValues, item => ({
        value: item.name,
        label: item.description
    }));

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
                <FormDateInput name={'birthDate'}
                               value={birthDate}
                               labelText={'Birth date'}
                               onChange={newMoment => setBirthDate(newMoment.format('YYYY-MM-DD'))}/>
                <FormInputText name={'college'}
                               value={college}
                               labelText={'College'}
                               inputCssClassName={'col-sm-5'}
                               onChange={e => setCollege(e.target.value)}/>
                <FormSelect name={'collegeYear'}
                            value={collegeYear}
                            labelText={'Year in college'}
                            valueLabelMaps={collegeYearEnumMaps}
                            onChange={e => setCollegeYear(e.target.value)}/>
                <FormSelect name={'position'}
                            value={position}
                            labelText={'Position'}
                            valueLabelMaps={footballPositionEnumMaps}
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
