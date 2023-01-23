import React from "react";
import { Container } from "react-bootstrap";

export default function Header () {
    return (
        <div className="header">
            <Container>
                <a className="navbar-brand" href="/">
                    <img src="/happypet.png" width="400" height="450" class="d-inline-block align-top" alt="" />
                </a>
            </Container>
        </div>
    )
}