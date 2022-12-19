import React from "react";
import Share from "./share";

export default function Jumbotron () {
    return (
        <div class="jumbotron jumbotron-fluid">
        <div class="container" style={{ textAlign: 'center' }}>
          <img src="./world-pet.png" alt="" width="400px" height="450px" />
          <p class="lead">This is a place for pet lover to share their pet story.</p>
        </div>
      <Share />
      </div>
    )
}