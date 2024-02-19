import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./itemcard.css"; // Assuming you have a CSS file for styling

export function ItemCard({ imageUrl, title, text }) {
  return (
    <Card className="item-card">
      <CardMedia
        component="img"
        alt={title}
        image={imageUrl}
        className="item-image"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
