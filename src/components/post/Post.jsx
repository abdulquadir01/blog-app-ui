import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";

import Base from "../Base";
import { fetchPostById } from "../../services/PostService";
import { BASE_URL } from "../../services/AxiosHelper";
import { createComment } from "../../services/CommentService";
import { isLoggedIn } from "../../util/AuthUtil";

const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  const [comment, setComment] = useState({
    content: "",
    postId: "",
    userId: "",
    date: new Date(Date.now()).toDateString(),
  });
  const changeHandler = (e) => {
    setComment({
      ...comment,
      content: e.target.value,
      postId: post?.postId,
      userId: post?.user?.userId,
    });
  };

  const submitComment = (e) => {
    e.preventDefault();
    console.log("commen before submitting", comment);

    if (!isLoggedIn) {
      toast.error("Login to comment");
      return;
    }

    if (comment.content.trim() === "") {
      return;
    }

    createComment(comment, post?.postId)
      .then((data) => {
        console.log("response after calling comment api\n ", data);
        toast.success("comment added...");
        setPost({
          ...post,
          comments: [...post.comments, data],
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // resting values post API call.
    setComment({
      content: "",
      postId: "",
      userId: "",
      date: new Date(Date.now()).toDateString(),
    });
  };

  useEffect(() => {
    fetchPostById(postId)
      .then((data) => {
        setPost(data);
        console.log("Post by Id: ", data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to load Post");
      });
  }, []);

  const printDate = (numbers) => {
    return new Date(numbers).toLocaleDateString();
  };

  return (
    <Base>
      <Container className="mt-4">
        <Link to="/">Home</Link>
        <Card>
          {post && (
            <CardBody>
              <CardText>
                <strong>{post?.user?.firstName}</strong> on
                <small>
                  <strong> {post?.addedDate}</strong>
                </small>
              </CardText>
              <CardText>
                <strong>{post?.title}</strong>
              </CardText>
              <CardText>
                <small className="text-muted">{post?.category?.title}</small>
              </CardText>
              <div className="image-container mt-3" style={{ maxWidth: "30%" }}>
                <img
                  className="img-fluid"
                  src={BASE_URL + "/posts/images/" + post?.imageName}
                  alt={post?.imageName}
                />
              </div>
              <CardText
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: post?.content }}
              ></CardText>
            </CardBody>
          )}
        </Card>

        <Row>
          <Col
            md={{
              size: 10,
              offset: 1,
            }}
          >
            {post &&
              post?.comments?.map((comment, index) => (
                <Card key={index} className="mt-1 border-0">
                  <CardBody>
                    <CardText className="">{comment?.content}</CardText>
                  </CardBody>
                </Card>
              ))}
            <Card className="border-0">
              <CardBody>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    className="border-0 mb-2"
                    placeholder="comment..."
                    name="content"
                    value={comment?.content}
                    onChange={changeHandler}
                  />
                </InputGroup>
                <Button className="btn" onClick={submitComment}>
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};
export default Post;
