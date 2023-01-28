import React, { useState, useEffect } from "react";
import style from "./Navbar.css";


const Navbar = () => {
  // Navbar dark theme state
  const [isDarkTheme, setIsDarkTheme] = useState("");

  // Listen to scroll event
  useEffect(() => {
    // Scroll handle function
    const onScroll = () => {
      if (window.scrollY > 100) setIsDarkTheme("isDarkTheme");
      else setIsDarkTheme("");
    };
    // Add event listener
    window.addEventListener("scroll", onScroll);
  }, []);

  // Render element
  return (
    <div className="Navbar" id = {isDarkTheme}>
      <a href="/" className="movieApp">Movie App</a>
      <form className="search_icon" action="/Search">
        <button action="/Search" type="submit" id = "searchButton"> <i className="fa fa-search" id = "searchIcon"></i></button>
      </form>
     
    </div>
    
  )
};

export default Navbar;
