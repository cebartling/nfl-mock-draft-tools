import {gql} from '@apollo/client';

const FOOTBALL_POSITION_ENUM_VALUES_QUERY = gql`
    query FootballPositionEnumValues {
        __type(name: "FootballPosition") {
            name
            enumValues {
                name
                description
            }
        }
    }
`;

export default FOOTBALL_POSITION_ENUM_VALUES_QUERY;


