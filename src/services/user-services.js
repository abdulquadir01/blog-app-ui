import { myAxios } from "./helper";

export const signIn = (signinUserData) => {
  return myAxios
    .post("/api/auth/login", signinUserData)
    .then((response) => response.data);
};

export const signUp = (signupUserData) => {
  return myAxios
    .post("/api/auth/register", signupUserData)
    .then((response) => response.data);
};
