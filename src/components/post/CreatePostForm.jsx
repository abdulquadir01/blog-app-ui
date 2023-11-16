import { useEffect, useRef, useState } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

import { getCategories } from "../../services/CategoryService";
import { createPost } from "../../services/PostService";
import { getCurrentUserDetail } from "../../util/AuthUtil";

const NewPostForm = () => {
  const editor = useRef(null);

  const [categories, setCategories] = useState([]);

  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  const [userDetail, setUserDetail] = useState(undefined);

  useEffect(() => {
    setUserDetail(getCurrentUserDetail());

    getCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const resetForm = () => {
    setPost({
      title: "",
      content: "",
      categoryId: "",
    });
  };

  const saveContent = (data) => {
    setPost({ ...post, content: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (post.title.trim() === "") {
      toast.error("Tilte is required!!");
      return;
    }

    if (post.content.trim() === "") {
      toast.error("Content is required!!");
      return;
    }

    if (post.categoryId.trim() === "") {
      toast.error("Select a valid catetgory!!");
      return;
    }

    // add userId to blogData
    console.log("User details: \n", userDetail);
    post["userId"] = userDetail?.userId;

    // submit the formData to the createPost API.
    createPost(post)
      .then((data) => {
        toast.success("Post Crerated");
        // console.log("createPost() returns : ",data);
        console.log(data);
      })
      .catch((error) => {
        toast.error("Some error occurred!");
        console.log(error);
      });

    // clear the form after sent request to backend
    resetForm();
  };

  return (
    <Container style={{ margin: "3rem auto" }}>
      <Form
        style={{
          padding: "3rem",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        onSubmit={handleSubmit}
      >
        <div
          className="form-title"
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h4> what&apos;s on your mind... </h4>
        </div>

        <Form.Group
          className="mb-3"
          label="Name your blog"
          controlId="formBasicTitle"
        >
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Title"
            value={post.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="my-4">
          <JoditEditor
            ref={editor}
            value={post.content}
            height="500px"
            onChange={saveContent}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Categories</Form.Label>
          <Stack direction="horizontal" gap={3}>
            <Form.Select
              onChange={handleChange}
              typeof="select"
              name="categoryId"
              placeholder="Category"
              defaultValue={0}
            >
              <option disabled value={0}>
                Select a Category
              </option>
              {categories.map((category) => {
                return (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.title}
                  </option>
                );
              })}
            </Form.Select>
            <Button variant="primary" type="submit">
              Post
            </Button>
            <div className="vr" />
            <Button variant="outline-danger" type="button" onClick={resetForm}>
              Reset
            </Button>
          </Stack>
        </Form.Group>
      </Form>
    </Container>
  );
};
export default NewPostForm;
