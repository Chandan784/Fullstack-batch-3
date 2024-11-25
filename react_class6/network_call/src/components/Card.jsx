import React from "react";

function Card({ singleData }) {
  return (
    <div>
      <div>
        <h1>{singleData.title}</h1>
        <p>{singleData.body}</p>
      </div>
    </div>
  );
}

export default Card;
