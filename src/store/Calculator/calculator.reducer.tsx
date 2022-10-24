import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

export interface State {
  tick: number;
}

export const reducer = (state = 0, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { state, ...action.payload };
    case "SUM":
      return action.payload[0] + action.payload[1];
    case "MIN":
      return action.payload[0] - action.payload[1];
    default:
      return state;
  }
};

export const toogleButton = (state = 1, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { state, ...action.payload };
    case "BUTTON_1":
      return 1;
    case "BUTTON_2":
      return 2;
    default:
      return state;
  }
};
