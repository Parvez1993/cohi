import React from "react";
import img from "../images/404.svg";
import { Link } from "react-router-dom";
import "../styles/Error.css";
function Error() {
  return (
    <div className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3 className="err-title">Ohh! page not found</h3>
        <p className="err_msg">
          We can't seem to find the page you're looking for
        </p>
        <Link to="/">back home</Link>
      </div>
    </div>
  );
}

export default Error;
