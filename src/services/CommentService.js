import { privateAxios } from "./AxiosHelper";

// create comment in the blog
export const createComment = (comment, postId) => {
  return privateAxios
    .post(`/posts/${postId}/comments`, comment)
    .then((res) => res.data);
};
