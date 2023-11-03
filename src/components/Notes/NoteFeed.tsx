import useNotes from "@/hooks/useNotes";
import { useState } from "react";
import Note from "./Note";
import NotePromptButton from "../Buttons/NotePromptButton";
import NoteSearch from "./NoteSearch";
import { styled } from "@mui/material";

const StyledNoteFeedNotice = styled("p")(() => ({
  color: "#fff",
  height: "auto",
  fontSize: "2rem",
  textAlign: "center",
  margin: "50px auto",
}));

const NoteFeed = () => {
  const { notes, searchNotes } = useNotes();
  const [searching, setSearching] =
    useState<boolean>(false);

  if (!notes?.length && !searching) {
    return (
      <StyledNoteFeedNotice>
        Once you create some notes they will show up here
      </StyledNoteFeedNotice>
    );
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "50px auto",
          display: "flex",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <NotePromptButton noteAction="create" />
        <NoteSearch
          searchNotes={searchNotes}
          setSearching={setSearching}
        />
      </div>
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
