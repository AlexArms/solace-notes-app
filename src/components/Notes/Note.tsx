import { Note } from "@/types/Note";
import React, { useEffect } from "react";
import NoteButton from "../Buttons/NoteActionButton";
import { Box, styled } from "@mui/material";
import NotePromptButton from "../Buttons/NotePromptButton";

interface NoteProps {
  note: Note;
}

const StyledNoteContainer = styled("fieldset")(() => ({
  backgroundColor: "#000",
  // backgroundColor: "#0f0f0f",
  // backgroundColor: "rgb(0, 104, )", // green
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "100%",
  padding: "16px",
  ":hover": {
    transform: "scale(1.05)",
    transition: "all 50ms linear",
  },

  "@media (max-width: 1000px)": {
    width: "75%",
  },
  "@media (max-width: 800px)": {
    width: "90%",
  },
}));
const StyledNoteTopRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "fit-content",
  alignContent: "center",
  // border: "1px solid white",
}));
const StyledButtonContainer = styled(Box)(() => ({
  // border: "1px solid blue",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  justifyContent: "center",
  alignContent: "center",
}));
const StyledNoteContent = styled("p")(() => ({
  maxWidth: "90%",
  fontSize: "1.25rem",
}));

const Note = ({ note }: NoteProps) => {
  return (
    <form
      style={{
        width: "60%",
        maxWidth: "100%",
        margin: "16px auto",
      }}
    >
      <StyledNoteContainer>
        <legend
          style={{
            fontSize: "1.5rem",
            // border: "2px solid black",
            background: "black",
            border: "2px solid grey",
            borderRadius: "6px",
            padding: "2px",
          }}
        >
          {note.title}
        </legend>
        <StyledNoteTopRow>
          <StyledNoteContent>
            {note.content}
          </StyledNoteContent>
          <StyledButtonContainer>
            <NotePromptButton
              noteAction="edit"
              note={note}
            />
            <NotePromptButton
              noteAction="delete"
              note={note}
            />
          </StyledButtonContainer>
        </StyledNoteTopRow>
      </StyledNoteContainer>
    </form>
  );
};

export default Note;
