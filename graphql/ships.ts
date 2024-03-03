import gql from "graphql-tag";

const ships = gql`
  query ships {
    ships(input: { pagination: { limit: 0, offset: 0 } }) {
      id
      class
      name
    }
  }
`;

const query = { ships };
const mutations = {};
const Ships = { query, mutations };
export { Ships };
