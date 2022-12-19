import React from "react";
import "./feed.css"
import Share from "./share";
import Header from "./header";
import Footer from "./footer";

export default function Feed () {
    return (
        <div className="feed">
            <Header />
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) => (
                <Post key={p.id} post={p} />
                ))}
            </div>
            <Footer />
        </div>
    )
}