import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

import Comments from "../post/Comments";


const Feed = ({
  post = { title: "default title", content: "default content" },
}) => {
  return (
    <article onClick={()=>{}}>
      <Card className="border-0 shadow-sm mt-4">
        <CardBody>
          <CardTitle className="d-flex mb-3">
            <div className="me-auto p-2">
              <small className="fs-6">{post?.user?.firstName}</small>
            </div>
            <div className="p-2">{post?.title}</div>
          </CardTitle>
          {/* <p>{post?.postgedDate}</p>  */}
          <CardText dangerouslySetInnerHTML={{ __html: post?.content.substring(0, 76)+"..."}}>
          </CardText>
          <Link to={"/posts/"+post?.postId} className="btn btn-outline-success">read more</Link>
        </CardBody>
      </Card>
      <Card>
        <Comments comments={post?.comments} />
      </Card>
    </article>
  );
};
export default Feed;
