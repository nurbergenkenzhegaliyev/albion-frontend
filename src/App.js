import Header from "./components/Header/Header.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Craft from "./pages/Craft.jsx";
import Home from "./pages/Home.jsx";
import {AppContext} from "./context.js";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Protected from "./containers/Protected.js";


function App() {
  return (
    <AppContext.Provider value={null}>
      <div className="wrapper clear ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
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
