import useNotes from "@/hooks/useNotes";
import { Input, styled } from "@mui/material";
import React, { useState } from "react";

const StyledSearchInput = styled("input")(() => ({
  unset: "all",
  width: "250px",
  borderRadius: "2px",
  border: "1px solid white",
  height: "100%",
  fontFamily: "Ubuntu, sans-serif",
  fontSize: "1.25rem",
}));

const NoteSearch = ({
  searchNotes,
  setSearching,
}: {
  searchNotes: (term: string) => void;
  setSearching: (searching: boolean) => void;
}) => {
  const updateSearchTerm = (event: any) => {
    if (event.target.value.length > 0) {
      console.log(event.target.value);
      setSearching(true);
    } else {
      setSearching(false);
    }
    searchNotes(event.target.value);
  };

  return (
    <div>
      <StyledSearchInput
        type="text"
        placeholder="Search notes..."
        onChange={updateSearchTerm}
        onKeyUp={(event) => {
          //@ts-ignore - this exists -- // todo: figure out type fix
          if (event.target.value.length === 0) {
            searchNotes("");
          }
        }}
      />
    </div>
  );
};

export default NoteSearch;
