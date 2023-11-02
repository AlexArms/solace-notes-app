import { Button, styled } from "@mui/material";
import React, { useState } from "react";
import NoteModal from "../modals/NoteModal";

const StyledNoteButton = styled(Button)(() => ({
  all: "unset",
  fontSize: "1.15rem",
  borderRadius: "2px",
  padding: "8px 14px",
  backgroundColor: "grey",
  ":hover": {
    transform: "scale(1.05)",
    transition: "all 100ms linear",
    backgroundColor: "white",
  },
}));

const NoteModalButton = () => {
  const [showModal, setShowModal] = useState(false);
  const openNoteModal = () => {
    setShowModal(true);
  };
  const closeNoteModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "fit-content",
        marginTop: "35px",
      }}
    >
      <StyledNoteButton onClick={openNoteModal}>
        Create New Note
      </StyledNoteButton>
      {showModal && (
        <NoteModal closeModal={closeNoteModal} />
      )}
    </div>
  );
};

export default NoteModalButton;
