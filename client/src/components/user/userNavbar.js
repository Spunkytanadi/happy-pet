import React from "react";

export default function UserNavbar () {
    return (
        <div className="userNavbar">
            <nav className="navbar navbar-dark bg-dark">
                <div className="topbarLeft">
                    <span className="logo">Happy Pet</span>
                </div>
                <div className="topbarCenter">
                 <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                </div>   
                </div>
            </nav>
        </div>
    )
}