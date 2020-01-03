import {gql} from '@apollo/client';

const COLLEGE_YEAR_ENUM_VALUES_QUERY = gql`
    query CollegeYearEnumValues {
        __type(name: "CollegeYear") {
            name
            enumValues {
                name
                description
            }
        }
    }
`;

export default COLLEGE_YEAR_ENUM_VALUES_QUERY;


