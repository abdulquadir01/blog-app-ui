import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import UserPosts from "./Pages/UserPosts";
import SavedPosts from "./Pages/SavedPosts";
import NewPost from "./Pages/NewPost";
import Index from "./components/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user/new-blog" element={<NewPost />} />
        <Route path="/user/blogs" element={<UserPosts />} />
        <Route path="/user/saved" element={<SavedPosts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
