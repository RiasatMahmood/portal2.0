import React, { Component } from "react";
// import { Link } from "react-router-dom";
// part of i frame

class Cyberpet extends Component {
  render() {
    return (
        <div>
            <iframe title = "my frame" id = "fullframe" src="./cyberpet/index.html" ></iframe>
        </div>
    );
}
}

export default Cyberpet;
