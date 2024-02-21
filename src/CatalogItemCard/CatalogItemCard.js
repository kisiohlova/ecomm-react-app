// src/CatalogItemCard/CatalogItemCard.js

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { getRandomImageUrl } from "../api";
import "./catalogitemcard.css";

export function CatalogItemCard() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      const url = await getRandomImageUrl();
      setImageUrl(url);
    };

    fetchRandomImage();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {imageUrl && (
          <CardMedia component="img" height="200" image={imageUrl} alt="" />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Item
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            esse temporibus architecto tenetur possimus soluta culpa nulla, odio
            sunt quam praesentium ut fugiat atque alias eos dolorem ab hic
            rerum.
          </Typography>
          <div className="price-container">
            <Typography
              variant="body2"
              color="text.secondary"
              className="price-text"
            >
              <strong>Price:</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $2415
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className="button-container">
        <Button size="small" variant="contained">
          View More
        </Button>
      </CardActions>
    </Card>
  );
}
