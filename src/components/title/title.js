import React from "react";
import "./title.css";

export const Title = (props) => {
  return (
    <div className="credit">
      <span className="title">Created by</span>
      <b>
        <a href="https://www.linkedin.com/in/pritammajumder/">
          {" Pritam Majumder"}
        </a>
      </b>
    </div>
  );
};
