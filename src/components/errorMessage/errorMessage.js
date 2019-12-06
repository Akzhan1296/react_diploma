import React from "react";
import img from "./coffee-404-shot.jpg";
import './error.css';
const ErrorMessage = () => {
  return (
    <div>
      <img className="error-img" src={img} alt="error"></img>

    </div>
  );
};

export default ErrorMessage;
