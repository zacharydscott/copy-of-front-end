import { IMiscState } from "./index";
import { miscTypes } from "../actions/misc/misc.types";
import { registerUserTypes } from "../actions/register-user/register-user.types";
const initialState: IMiscState = {
  errorMessage: "",
  exerciseTypeText: "",
  passwordCheck: "",
  workoutTypeText: ""
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
    case miscTypes.UPDATE_EXER_TEXT:
      return {
        ...state,
        exerciseTypeText: action.payload.exerciseTypeText
      };
    case miscTypes.UPDATE_WORK_TEXT:
      window.console.log("asd");
      return {
        ...state,
        workoutTypeText: action.payload.workoutTypeText
      };
    default:
      return state;
  }
};
