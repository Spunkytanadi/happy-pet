import { Container } from "react-bootstrap";
import React from "react";
import UserNavbar from "./userNavbar";
import Share from "./share";

export default function profile () {
    return  (
        <Container>
        <UserNavbar />    
            <div>
                <p>Welcome to your Profile</p>
            </div>
        <Share />
        </Container>
    );  
}