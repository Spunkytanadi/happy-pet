import React from "react";
import Footer from "./footer";
import Topnavbar from "./topnavbar";

export default function About () {
    return (
        <div className="aboutpage">
            <Topnavbar />
                <h1 style={{ textAlign: 'center' }}>About This Page</h1>
                <div className="about" style={{ textAlign: 'center' }}>
                    <p>This site was created for those who love their pet and to share their pet daily cuteness.</p>
                    <p>Let make the world a better place and share the love of your pet to the world!</p>
                    <img src="jumbotron.png" alt="" width="500" height="600" />
                </div>
            <Footer />
        </div>
    )
}