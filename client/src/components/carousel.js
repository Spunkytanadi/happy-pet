import React from "react"

export default function thumbnail () {
  return (
    <div className="bg-1">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="thumbnail">
              <img src="jumbotron.jpeg" alt="jumbotron" width="250px" height="300px"/>
                <p><strong>Share your pet picture to the world!</strong></p>
            </div>
          </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="happypet.png" alt="logo" width="400px" height="500px"/>
              <h2><strong>Welcome to Happy Pet</strong></h2>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src="spunky.jpeg" alt="pet"/>
              <p><strong>One of our pet picture collection!</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}