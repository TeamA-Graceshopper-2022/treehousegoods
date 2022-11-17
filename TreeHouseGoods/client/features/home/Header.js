import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div class="logo">
      <link rel="icon" href="https://www.designevo.com/res/templates/thumb_small/house-tree-leaf-simple-treehouse.webp"/>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
