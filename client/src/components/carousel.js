import React from "react"

export default function thumbnail () {
  return (
    <div class="bg-1">
      <div class="container">
        <div class="row text-center">
          <div class="col-sm-4">
            <div class="thumbnail">
              <img src="jumbotron.jpeg" alt="jumbotron" width="250px" height="300px"/>
                <p><strong>Share your pet picture to the world!</strong></p>
            </div>
          </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="happypet.png" alt="logo" width="400px" height="500px"/>
              <h2><strong>Welcome to Happy Pet</strong></h2>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="spunky.jpeg" alt="pet"/>
              <p><strong>One of our pet picture collection!</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}