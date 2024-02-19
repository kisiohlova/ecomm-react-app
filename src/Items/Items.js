import React, { useState, useEffect } from "react";
import { ItemCard } from "../ItemCard/ItemCard";
import { getRandomImageUrl } from "../api";
import Button from "@mui/material/Button";
import "./items.css";

export function Items() {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(false); // State to track loading state

  useEffect(() => {
    const fetchRandomImages = async () => {
      setLoading(true); // Set loading state to true while fetching images
      const newItemsData = []; // Initialize an empty array for new items data
      // Fetch and add the first three images when the component mounts
      for (let i = 0; i < 3; i++) {
        const imageUrl = await getRandomImageUrl();
        newItemsData.push({
          imageUrl: imageUrl,
          title: `Item ${i + 1}`, // Set the title index without adding itemsData.length
          text: "Description goes here.",
        });
      }
      setItemsData(newItemsData);
      setLoading(false); // Set loading state to false after fetching images
    };

    fetchRandomImages(); // Fetch the first three images when the component mounts
  }, []); // Run only once when the component mounts

  const handleViewMore = async () => {
    setLoading(true); // Set loading state to true when "View More" button is clicked
    const newItemsData = [...itemsData]; // Copy existing items data
    // Fetch and add three more images when "View More" button is clicked
    for (let i = 0; i < 3; i++) {
      const imageUrl = await getRandomImageUrl();
      newItemsData.push({
        imageUrl: imageUrl,
        title: `Item ${newItemsData.length + i + 1}`, // Increment the title index based on the new length
        text: "Description goes here.",
      });
    }
    setItemsData(newItemsData);
    setLoading(false); // Set loading state to false after fetching images
  };

  return (
    <>
      <div className="items-list">
        {itemsData.map((item, index) => (
          <ItemCard
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      <div className="button-container">
        <Button variant="contained" onClick={handleViewMore} disabled={loading}>
          View More
        </Button>
      </div>
    </>
  );
}

export default Items;
