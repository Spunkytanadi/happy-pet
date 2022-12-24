import React from "react";
import { Search, Person, Notification } from "material-ui/icons"

export default function UserNavbar () {
    return (
        <div className="userNavbarContainer">
            <nav class="navbar navbar-dark bg-dark">
                <div className="topbarLeft">
                    <span className="logo">Happy Pet</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className="searchIcon" />
                        <input
                            placeholder="Search for post"
                            className="searchInput"
                        />
                    </div>
                 <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notification />
                            <span className="topbarIconBadge">2</span>
                        </div>
                    </div>
                </div>   
                </div>
            </nav>
        </div>
    )
}