import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Signin from "./pages/Sign-in/Signin";
import Signup from "./pages/Sign-up/Signup";
import About from "./pages/About/About";
import CreatePost from "./pages/CreatePost/CreatePost";
import Post from "./components/post/Post";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import InnerRoutes from "./routes/InnerRoutes";
import Services from "./pages/Services";
import Settings from "./pages/Settings";
import BookmarkedPosts from "./pages/Profile/BookmarkedPosts";
import UserPosts from "./pages/Profile/UserPosts";



function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/posts/:postId" element={<Post />} />

        <Route exact path="/" element={<InnerRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="new" element={<CreatePost />} />
          <Route path="blogs" element={<UserPosts />} />
          <Route path="bookmarked" element={<BookmarkedPosts />} />
        </Route>
        <Route path="/services" element={<Services />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
