import { getAccessToken } from "../util/AuthUtil";
import { myAxios, privateAxios } from "./AxiosHelper";

// create a new
export const createPost = (postData) => {
  const url = `/user/${postData.userId}/category/${postData.categoryId}/posts`;
  return privateAxios.post(url, postData).then((response) => response.data);
};

// fetch all the post
export const fetchAllPost = () => {
  const AuthStr = "Bearer " + getAccessToken();
  const url = "/posts";
  return myAxios
    .get(url, { headers: { Authorization: AuthStr } })
    .then((response) => response.data);
};

// fetch all the blogs page-by-page
export const fetchPostsByPage = (pageNumber, pageSize) => {
  const AuthStr = "Bearer " + getAccessToken();
  const url = `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`;
  return myAxios
    .get(url, { headers: { Authorization: AuthStr } })
    .then((response) => {
      console.log("post data post api call fetchPostsByPage() ", response.data);
      return response.data;
    });
};

// fetch a blog by it's id
export const fetchPostById = (postId) => {
  const AuthStr = "Bearer " + getAccessToken();
  const url = `/posts/${postId}`;
  return myAxios
    .get(url, { headers: { Authorization: AuthStr } })
    .then((res) => res.data);
};
