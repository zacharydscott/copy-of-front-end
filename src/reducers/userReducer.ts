import { IUserState } from ".";
/**
 * See the index.ts file for an explanation of all state properties
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
