import { myAxios } from "./helper";

export const signIn = (user) => {
  return myAxios.post("/api/auth/login",user)
                .then((response) => response.data);
};

export const signUp = (user) => {
  return myAxios.post("/api/auth/register",user)
                .then((response) => response.data);
};
