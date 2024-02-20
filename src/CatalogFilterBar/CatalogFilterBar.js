// FilterBar.js
import React, { useState } from "react";
import { Button, Select, MenuItem } from "@mui/material";
import "./catalogfilterbar.css";

export function FilterBar() {
  const [filter1, setFilter1] = useState("filter1");
  const [filter2, setFilter2] = useState("filter2");
  const [filter3, setFilter3] = useState("filter3");

  return (
    <div className="filter-bar">
      <div className="filters">
        <div className="filter">
          <Select
            value={filter1}
            onChange={(e) => setFilter1(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="filter1">Filter 1</MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </div>
        <div className="filter">
          <Select
            value={filter2}
            onChange={(e) => setFilter2(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="filter2">Filter 2</MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </div>
        <div className="filter">
          <Select
            value={filter3}
            onChange={(e) => setFilter3(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="filter3">Filter 3</MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </div>
      </div>
      <div className="apply-button">
        <Button variant="contained" color="primary" className="apply-button">
          Apply
        </Button>
      </div>
    </div>
  );
}
