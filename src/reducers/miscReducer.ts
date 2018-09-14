import { IMiscState } from "./index";
import { miscTypes } from "../actions/misc/misc.types";
import { registerUserTypes } from "../actions/register-user/register-user.types";
const initialState: IMiscState = {
  errorMessage: "",
  passwordCheck: ""
};

export const miscReducer = (state: IMiscState = initialState, action: any) => {
  switch (action.type) {
    case registerUserTypes.UPDATE_USER_REGISTER:
      return {
        ...state,
        passwordCheck: action.payload.passwordCheck
      };
    case miscTypes.UPDATE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
};
