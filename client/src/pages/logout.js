import React from "react";
import { Button } from "react-bootstrap";


export default function Logout (props) {
    return (
        <div className="logout">
            <div className="logoutWrappper">
                <Button type="button" class="btn btn-dark">Logout</Button>
            </div>
        </div>
    )
}