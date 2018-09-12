import { IUserState } from ".";
/**
 * See the index.ts file for an explanation of all state properties, and model files for explanation of
 * objects that comprise them.  When a new action type is caught in the switch, comment the
 * actions that use this type.
 */

const initialState: IUserState = {
  email: "",
  firstName: "",
  gender: "",
  height: 0,
  lastName: "",
  password: "",
  username: "",
  weight: 0
};
export const userReducer = (state: IUserState = initialState, action: any) => {
  switch (action.type) {
  }
};
