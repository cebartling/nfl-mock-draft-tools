import React from 'react';

const collegeYearPrettyValuesMap = {
    FRESHMAN: 'Freshman',
    SOPHOMORE: 'Sophomore',
    JUNIOR: 'Junior',
    SENIOR: 'Senior',
    GRADUATE: 'Graduate'
};

const CollegeYearText = (props) => {
    return (
        <span>{collegeYearPrettyValuesMap[props.collegeYear]}</span>
    );
};

export default CollegeYearText;
