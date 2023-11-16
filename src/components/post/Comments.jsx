import Comment from "./Comment";

const Comments = ({ comments = { content: "default comment" } }) => {
  return (
    <div className="">
      {comments?.length > 0 &&
        comments?.map((comment) => {
          <Comment key={comment?.id}>{comment}</Comment>;
        })}
    </div>
  );
};
export default Comments;
