"use client";
import React from "react";
import buttonStyles from "./Button.module.css";

const ButtonComp = () => {
  const handleClick = () => {
    window.open(
      "https://36ae7h3xyr9xbs9dhhnq1qduc5.hop.clickbank.net",
      "_blank"
    );
  };

  return (
    <div className={buttonStyles.buttonDiv}>
      <button type="button" className={buttonStyles.btn} onClick={handleClick}>
        Try Now!
      </button>
    </div>
  );
};

export default ButtonComp;
