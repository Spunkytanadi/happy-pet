import React from "react";
import { PermMedia, Label, EmojiEmotions } from "@material-ui/icons"
import "./share.css"
import Header from "./header";
import Footer from "./footer";

export default function Share () {
    return (
        <div className="share">
            <Header />
            <div className="shareWarpper">
                <div className="shareTop">
                    <img className="shareProfileImage" alt=""/>
                    <input
                        placeholder="What's new today?"
                        className="shareInput"
                    />
                </div>
                <hr  className="shareHr" />
                <div className="shareBottom">
                    <div className="ShareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo of Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}