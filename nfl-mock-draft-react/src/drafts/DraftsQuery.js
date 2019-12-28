import {gql} from '@apollo/client';

const DRAFTS_QUERY = gql`
    query Drafts {
        drafts {
            id
            year
            draftDate
            createdAt
            updatedAt
        }
    }
`;

export default DRAFTS_QUERY;


