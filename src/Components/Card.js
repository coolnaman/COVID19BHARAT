import React from "react";

const Card = (props) => {
  return (
    <div className="cardBanner">
      <div className="headingBox">{props.heading}</div>
      <div className="text">{props.text}</div>
    </div>
  );
};

export default Card;
