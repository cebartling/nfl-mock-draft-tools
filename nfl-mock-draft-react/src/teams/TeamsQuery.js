import {gql} from '@apollo/client';

const TEAMS_QUERY = gql`
    query Teams {
        teams {
            id
            name
            slug
            svgLogoUrl
            createdAt
            updatedAt
        }
    }
`;

export default TEAMS_QUERY;