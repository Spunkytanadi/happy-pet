import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function UserHome () {
    const [authenticated, setauthenticated] = useState(null);
        useEffect(() => {
            const loggedInUser = localStorage.getItem("authenticated");
                if (loggedInUser) {
                    setauthenticated(loggedInUser);
                }
        }, []);

        if (!authenticated) {
            <Navigate replace to="/login" />
        } else {
        return  (
            <div>
                <p>Welcome to your Profile</p>
            </div>
        );  
        }
};