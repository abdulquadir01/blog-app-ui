import { myAxios } from "./AxiosHelper";

export const signIn = (signinUserData) => {
  return myAxios
    .post("/auth/login", signinUserData)
    .then((response) => response.data);
};

export const signUp = (signupUserData) => {
  return myAxios
    .post("/auth/register", signupUserData)
    .then((response) => response.data);
};
