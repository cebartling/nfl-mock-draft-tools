import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const inMemoryCacheOptions = {
    typePolicies: {
        AnnualDraft: {
            keyFields: ["id"],
        },
        DraftProspect: {
            keyFields: ["id"],
        },
        Team: {
            keyFields: ["id"],
        },
    },
};

const client = new ApolloClient({
    cache: new InMemoryCache(inMemoryCacheOptions),
    link: new HttpLink({uri: process.env.REACT_APP_GRAPHQL_URL})
});

export default client;