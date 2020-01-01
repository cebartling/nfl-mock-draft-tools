import {gql} from '@apollo/client';

const DRAFT_PROSPECTS_QUERY = gql`
    query DraftProspects($annualDraftId: ID!) {
        draftProspects(annualDraftId: $annualDraftId) {
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
            annualDraft {
                id
            }
        }
    }
`;

export default DRAFT_PROSPECTS_QUERY;


