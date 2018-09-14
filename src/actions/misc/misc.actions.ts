import { miscTypes } from "./misc.types";

export const updateErrorMessage = (message: string) => {
  return {
    payload: {
      errorMessage: message
    },
    type: miscTypes.UPDATE_ERROR_MESSAGE
  };
};
