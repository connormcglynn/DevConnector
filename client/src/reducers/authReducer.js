import { TEST_DISPATCH } from "../actions/types";

const inititalState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
