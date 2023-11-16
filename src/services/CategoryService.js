import { myAxios } from "./AxiosHelper";

export const getCategories = () => {
  return myAxios.get("/categories").then((respone) => respone.data);
};
