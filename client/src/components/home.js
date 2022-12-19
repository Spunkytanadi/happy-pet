import React from "react";
import Jumbotron from "./jumbotron";
import Topnavbar from "./topnavbar";
import Footer from "./footer";

export default function Home () {
    return (
        <div>
        <Topnavbar />
        <Jumbotron />
        <Footer />
        </div>
    )
}