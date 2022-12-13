import Header from "./components/Header/Header.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Craft from "./pages/Craft.jsx";
import Home from "./pages/Home.jsx";
import {AppContext} from "./context.js";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  const [clickedTier, setClickedTier] = React.useState("");
  const [makerType, setMakerType] = React.useState({
    url: "none",
    name: "none",
  });
  const [itemType, setItemType] = React.useState({ url: "none", name: "none" });
  const [itemName, setItemName] = React.useState({ url: "none", name: "none" });
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  // async function getUser() {
  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: '/auth/login',
  //       data: {
  //         username: 'user2@mail.ru',
  //         password: '12345'
  //       }
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // getUser();

  return (
    <AppContext.Provider
      value={{
        clickedTier,
        setClickedTier,
        makerType,
        setMakerType,
        itemType,
        setItemType,
        itemName,
        setItemName,
      }}
    >
      <div className="wrapper clear ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/craft" exact element={<Craft />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
