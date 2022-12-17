import React from "react";
import Home from "./home";
import About from "./about";
import Feed from "../components/feed/feed";
import Logout from "./logout";
import Footer from "./footer";

export default function Header () {
  return (
    <div className="header">
      <div className="headerWrapper">
        <Feed />
        <Home />
        <About />
        <Logout />
      </div>
      <Footer />
    </div>
  );
}