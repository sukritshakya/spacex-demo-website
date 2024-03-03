import { Ships } from "./ships";
import { Rockets } from "./rockets";

const apiCalls = {
  queries: {
    ...Ships.query,
    ...Rockets.query,
  },
  mutations: {
    ...Ships.mutations,
    ...Rockets.mutations
  },
};

export default apiCalls;
