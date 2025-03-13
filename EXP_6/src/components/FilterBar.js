import React from "react";
import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

function FilterBar({ setFilter }) {
  const [alignment, setAlignment] = React.useState("all");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setFilter(newAlignment);
    }
  };

  return (
    <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="task filter"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="pending">Pending</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default FilterBar;
