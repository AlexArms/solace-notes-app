import useNotes from "@/hooks/useNotes";
import { Note } from "@/types/Note";
import NiceModal from "@ebay/nice-modal-react";
import { Box, Dialog } from "@mui/material";
import { styled } from "@mui/system";
import NoteButton from "../Buttons/NoteActionButton";

const StyledNoteFormContainer = styled(Box)(() => ({
  // border: "2px solid white",
  background: "#0f0f0f",
  height: "100%",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
}));

interface ConfirmDeletionProps {
  note: Note;
}

const ConfirmDeletion = NiceModal.create(
  ({ note }: ConfirmDeletionProps) => {
    const notes = useNotes();

    return (
      <Dialog
        open={true}
        onClose={() => {
          NiceModal.remove("confirm-note-deletion");
        }}
      >
        <StyledNoteFormContainer>
          <p>
            {"Are you sure you'd like to delete this note?"}
          </p>
          <NoteButton
            variant="delete"
            action="confirm"
            note={note}
          />
          <NoteButton variant="delete" action="cancel" />
        </StyledNoteFormContainer>
      </Dialog>
    );
  }
);

export default ConfirmDeletion;
