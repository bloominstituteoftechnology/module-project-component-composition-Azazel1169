import React from "react";

export default function Figure({imageURL,caption }) {
    return (
      <figure>
        <img src={imageURL} />
        <figcaption>Image taken on {caption}</figcaption>
      </figure>
    )
  }