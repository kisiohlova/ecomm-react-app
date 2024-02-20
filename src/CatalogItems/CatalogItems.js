// src/CatalogItems/CatalogItems.js

import React from "react";
import { CatalogItemCard } from "../CatalogItemCard/CatalogItemCard";
import "./catalogitems.css";

export function CatalogItems() {
  const renderCatalogItems = () => {
    const items = [];

    for (let i = 0; i < 4; i++) {
      items.push(
        <div key={i} className="catalog-item">
          <CatalogItemCard index={i + 1} />
        </div>
      );
    }

    return items;
  };

  return <div className="catalog-container">{renderCatalogItems()}</div>;
}
