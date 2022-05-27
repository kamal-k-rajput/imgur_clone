import React, { useState, useContext } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "../../Button/Button";
import { InputText } from "../../context/InputText";
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
          <div>
            <img
              src="https://www.w3.org/StyleSheets/TR/2016/logos/W3C"
              alt=""
            />
          </div>
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
          <img alt="" src={SearchIcon} style={{ color: "black" }} />
          Search
        </button>
      </div>
      <div className="navbar-account">
        <div>Badge</div>
        <div>Go Add-free</div>
        <div>Sign In </div>
        <button>Sign Up</button>
      </div>
      <Button />
    </div>
  );
};
