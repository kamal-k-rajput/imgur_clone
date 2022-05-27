import React, { useState, useContext } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

import { InputText } from "../../context/InputText";
import AddBoxIcon from "@mui/icons-material/AddBox";
export const Navbar = () => {
  const [search, setsearch] = useState("");
  const { changetext } = useContext(InputText);
  const handleChange = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };
  function handleClick() {
    changetext(search);
  }
  return (
    <div className="navbar-container">
      <div className="navbar-icon">
        <div>logo</div>
        <div className="navbar-post-btn">
          <AddBoxIcon />
          <button>New Post</button>
        </div>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          onChange={handleChange}
          id="searchText"
          className="searchBox"
          placeholder="Search "
        />
        <button className="search-btn" onClick={handleClick}>
          <SearchIcon />
        </button>
      </div>
      <div className="navbar-account">
        <MilitaryTechIcon />
        <div>Go Add-free</div>
        <button className="account-btn">Sign In </button>
        <button className="account-btn">Sign Up</button>
      </div>
    </div>
  );
};
