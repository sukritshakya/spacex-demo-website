import gql from "graphql-tag";

const rockets = gql`
  query rockets {
    rockets(input: { pagination: { limit: 0, offset: 0 } }) {
      id
        name
        description
        company
        costPerLaunch
        stages
        boosters
        wikipedia
        payloadWeights {
          id
          stringId
          name
          kg
          lb
        }
    }
  }
`;

const query = { rockets };
const mutations = {};
const Rockets = { query, mutations };
export { Rockets };
