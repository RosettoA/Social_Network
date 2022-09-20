import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";
import Navbar from "../Navbar";

const index = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/profil" exact element={<Profil />}></Route>
        <Route path="/trending" exact element={<Trending />}></Route>
        <Route path="*" exact={true} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default index;
