// src/pages/CatalogPage.js

import React from "react";
import { CatalogItems } from "../CatalogItems/CatalogItems";
import { FilterBar } from "../CatalogFilterBar/CatalogFilterBar";

export function Catalog() {
  return (
    <>
      <FilterBar />
      <CatalogItems />;
    </>
  );
}
