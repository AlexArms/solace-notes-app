import { Note } from "@/types/Note";
import React, { useEffect } from "react";
import NoteButton from "../Buttons/NoteActionButton";
import { Box, styled } from "@mui/material";
import NotePromptButton from "../Buttons/NotePromptButton";

interface NoteProps {
  note: Note;
}

const StyledNoteContainer = styled(Box)(() => ({
  backgroundColor: "#000",
  // backgroundColor: "#0f0f0f",
  // backgroundColor: "#090909",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "60%",
  maxWidth: "100%",
  padding: "12px",
  boxShadow: "0px 0px 8px white",
  margin: "16px auto",
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
const StyledNoteTitle = styled("h3")(() => ({
  // border: "1px solid green",
  // height: "100%",
  // overflow: "hidden",
  // whiteSpace: "nowrap",
  // textOverflow: "ellipsis",
}));
const StyledButtonContainer = styled(Box)(() => ({
  // border: "1px solid blue",
  height: "100%",
  display: "flex",
  gap: 10,
  justifyContent: "center",
  alignContent: "center",
}));
const StyledNoteContent = styled("p")(() => ({}));

const Note = ({ note }: NoteProps) => {
  return (
    <StyledNoteContainer>
      <StyledNoteTopRow>
        <StyledNoteTitle>{note.title}</StyledNoteTitle>
        <StyledButtonContainer>
          <NotePromptButton
            noteAction="delete"
            note={note}
          />
          <NotePromptButton noteAction="edit" note={note} />
        </StyledButtonContainer>
      </StyledNoteTopRow>
      <StyledNoteContent>{note.content}</StyledNoteContent>
    </StyledNoteContainer>
  );
};

export default Note;
