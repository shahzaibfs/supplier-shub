import { constants } from "../constants";

export const signupAction = (payload) => ({
  type: constants.signupAction,
  payload,
});
