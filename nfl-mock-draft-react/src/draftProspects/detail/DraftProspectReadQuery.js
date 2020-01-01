import {gql} from '@apollo/client';

const DRAFT_PROSPECT_READ_QUERY = gql`
    query DraftProspect($id: ID!) {
        draftProspect(id: $id) {
            id
            familyName
            givenName
            middleName
            birthDate
            college
            collegeYear
            position
            createdAt
            updatedAt
        }
    }
`;

export default DRAFT_PROSPECT_READ_QUERY;


