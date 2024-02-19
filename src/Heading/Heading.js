import React, { useState, useEffect } from "react";
import { getRandomImageUrl } from "../api";
import "./heading.css";

export function Heading() {
  const [imageUrl, setImageUrl] = useState(""); // State to store the random image URL

  useEffect(() => {
    const fetchRandomImage = async () => {
      const imageUrl = await getRandomImageUrl();
      setImageUrl(imageUrl);
    };

    fetchRandomImage();
  }, []); // Fetch a random image when the component mounts

  return (
    <div className="heading-container">
      <img src={imageUrl} alt="Random" className="heading-image" />
      <div className="heading-content">
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          aspernatur odit! Recusandae voluptates numquam distinctio nam
          reiciendis. Aliquam, mollitia tempore esse quo, facere veritatis velit
          expedita asperiores id veniam saepe?
        </p>
      </div>
    </div>
  );
}
