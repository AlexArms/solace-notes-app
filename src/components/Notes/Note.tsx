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
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  width: "60%",
  maxWidth: "100%",
  padding: "16px",
  transform: "scale(1)",
  transition: "all 100ms linear",
  ":hover": {
    transform: "scale(1.05)",
    transition: "all 100ms linear",
  },

  "@media (max-width: 900px)": {
    width: "95%",
  },
}));
const StyledNoteTopRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignContent: "center",
}));
const StyledButtonContainer = styled(Box)(() => ({
  height: "100%",
  width: "fit-content",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  justifyContent: "center",
  alignContent: "center",
}));
const StyledNoteContent = styled("div")(() => ({
  paddingRight: "2.5%",
  fontSize: "1.25rem",
  overflowWrap: "anywhere",
}));

const Note = ({ note }: NoteProps) => {
  return (
    <form
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "16px auto",
      }}
    >
      <StyledNoteContainer>
        <legend
          style={{
            fontSize: "1.5rem",
            background: "black",
            border: "2px solid grey",
            borderRadius: "6px",
            padding: "4px 10px",
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
