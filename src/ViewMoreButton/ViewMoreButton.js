import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

export function ViewMoreButton({ onClick, disabled }) {
  return (
    <div className="button-container">
      <Button variant="contained" onClick={onClick} disabled={disabled}>
        View More
      </Button>
    </div>
  );
}

ViewMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
