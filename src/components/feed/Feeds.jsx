import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";

import Feed from "./Feed";
import { fetchPostsByPage } from "../../services/PostService";

const Feeds = () => {
  const [postData, setPostData] = useState({
    posts: [],
    pageCount: "",
    pageSize: "",
    totalPages: "",
    lastPage: false,
  });

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    changePage(currentPage, 5);
  }, [currentPage]);

  const changePage = (pageNumber = 0, pageSize = 5) => {
    fetchPostsByPage(pageNumber, pageSize)
      .then((data) => {
        setPostData(data);
        console.log("Post data: ", postData);

        setPostData({
          posts: [...postData.posts, ...data.posts],
          pageCount: data.pageCount,
          pageSize: data.pageSize,
          totalPages: data.totalPages,
          lastPage: data.lastPage,
          pageNumber: data.pageNumber,
        });

        window.scrollTo(0, 0);
        // console.log("Posts fetched: changePage() \n", postData);
      })
      .catch((error) => {
        toast.error("error while fetching posts");
        console.log("error while fetching posts: \n", error);
      });
  };

  const changePageInfinite = () => {
    console.log("page changed");
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={postData?.posts?.length}
        next={changePageInfinite}
        hasMore={!postData?.lastPage}
      >
        {postData?.posts?.map((post) => {
          return <Feed post={post} key={post.postId} />;
        })}
      </InfiniteScroll>

      {/* <CustomPagination
        pageCount={postData.pageCount}
        pageSize={(postData.pageSize = 5)}
        totalPages={postData.totalPages}
        lastPage={postData.lastPage}
        changePage={changePage}
      /> */}
    </>
  );
};
export default Feeds;
