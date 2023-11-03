import useNotes from "@/hooks/useNotes";
import { useState } from "react";
import Note from "./Note";
import NotePromptButton from "../Buttons/NotePromptButton";
import NoteSearch from "./NoteSearch";
import { styled } from "@mui/material";
import NoteSort from "./NoteSort";

const StyledNoteFeedNotice = styled("p")(() => ({
  color: "#fff",
  height: "auto",
  fontSize: "2rem",
  textAlign: "center",
  margin: "auto",
}));

const StyledRow = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "50px",

  "@media (max-width: 500px)": {
    flexDirection: "column",
    gap: "20px",
  },
}));

const NoteFeed = () => {
  const { notes, searchNotes, sortNotes } = useNotes();
  const [searching, setSearching] =
    useState<boolean>(false);

  return (
    <>
      <StyledRow>
        <NotePromptButton noteAction="create" />
        <NoteSearch
          searchNotes={searchNotes}
          setSearching={setSearching}
        />
      </StyledRow>
      <NoteSort sortNotes={sortNotes} />
      {!notes?.length && !searching && (
        <StyledNoteFeedNotice>
          Once you create some notes they will show up here
        </StyledNoteFeedNotice>
      )}
      {searching && !notes.length && (
        <StyledNoteFeedNotice>
          No notes found matching your search
        </StyledNoteFeedNotice>
      )}
      {notes?.map((note) => {
        return <Note key={note._id} note={note} />;
      })}
    </>
  );
};

export default NoteFeed;
