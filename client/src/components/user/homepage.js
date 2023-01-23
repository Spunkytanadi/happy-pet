import { Container } from "react-bootstrap";
import React from "react";
import UserNavbar from "./userNavbar";
import Share from "./share";
import Footer from "../footer";

export default function Homepage () {
    return  (
        <Container>
        <UserNavbar />    
            <div>
                <p>Welcome back!</p>
            </div>
        <Share />
        <Footer />
        </Container>
    );  
}