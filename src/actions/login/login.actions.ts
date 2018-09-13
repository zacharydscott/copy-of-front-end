import { loginTypes } from "./login.types";

export const changeUsernameAndPassword = (
  newUsername: string,
  newPassword: string
) => {
  return {
    payload: {
      password: newPassword,
      usename: newUsername
    },
    type: loginTypes.UPDATE_USERNAME_AND_PASSWORD
  };
};

export const submitLogin = () => {
  // let user = fetch('someurl',) fetch request, replace this garbage
  const logUser = {
    accountNumber: 2,
    email: "spencedog@yahoo.com",
    firstName: "Spence",
    gender: "m",
    height: 67,
    lastName: "Dog",
    password: "pass",
    username: "spencedawg",
    weight: 140
  };
  return {
    payload: {
      accountNumber: logUser.accountNumber,
      email: logUser.email,
      firstName: logUser.firstName,
      gender: logUser.gender,
      height: logUser.height,
      lastName: logUser.lastName,
      password: logUser.password,
      username: logUser.username,
      weight: logUser.weight
    },
    type: loginTypes.SUBMIT_LOGIN
  };
};
