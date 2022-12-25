import React from "react";
import { Container, Nav } from "react-bootstrap";

export default function Header () {
    return (
        <div className="header">
            <Container>
            <Nav class="navbar">
                <a class="navbar-brand" href="/">
                    <img src="/happypet.png" width="400" height="450" class="d-inline-block align-top" alt="" />
                </a>
            </Nav>
            </Container>
        </div>
    )
}