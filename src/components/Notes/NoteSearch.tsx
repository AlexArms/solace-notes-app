import { Input, styled } from "@mui/material";
import React, { useState } from "react";

const StyledSearchInput = styled("input")(() => ({
  unset: "all",
  width: "250px",
  borderRadius: "2px",
  border: "1px solid white",
  height: "100%",
  fontSize: "1.25rem",
}));

const NoteSearch = () => {
  const [searchTerm, setSearchTerm] = useState();
  // todo: create search field input and functionality for searching notes
  // only filter if search term is >= 2 chars - filtering on 1 seems redundant
  // search based on contents - maybe add based on date or title as a bonus
  const updateSearchTerm = (event: any) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <StyledSearchInput
        type="text"
        placeholder="Search notes..."
        onChange={updateSearchTerm}
      />
    </div>
  );
};

export default NoteSearch;
