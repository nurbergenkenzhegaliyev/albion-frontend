import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Craft from "./pages/Craft.jsx";
import Home from "./pages/Home.jsx";
import {AppContext} from "./context.js";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Protected from "./containers/Protected.js";
import Blog from "./pages/Blog.jsx";
import BlogPostPage from "./pages/BlogPostPage.jsx";


function App() {
  return (
    <AppContext.Provider value={null}>
      <div className="wrapper clear wrapMiddle">
        <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="blog" exact element={<Blog />}/>
              <Route path="blog:id" element={<BlogPostPage />} />
              {/* </Route> */}

              <Route path="/craft" exact element={
                <Protected>
                  <Craft />
                </Protected>
              } />
              <Route path="/login" exact element={<Login />} />
              <Route path="/register" exact element={<Register />} />
            </Routes>
          
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
