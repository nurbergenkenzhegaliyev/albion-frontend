import React from "react";
import CraftContainer from "../containers/CraftContainer/CraftContainer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Craft() {
  return (
    <>
      <Header />
      <CraftContainer />
      <Footer />
    </>
  );
}

export default React.memo(Craft);
