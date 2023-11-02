import useNotes from "@/hooks/useNotes";
import { Note } from "@/types/Note";
import NiceModal from "@ebay/nice-modal-react";
import { Box, Dialog } from "@mui/material";
import { styled } from "@mui/system";
import NoteButton from "../Buttons/NoteActionButton";

const StyledNoteFormContainer = styled(Box)(() => ({
  background: "#0f0f0f",
  height: "100%",
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  margin: "auto",
  width: "100%",
  justifyContent: "space-evenly",
  alignItems: "center",
  color: "#fff",
  padding: "50px",
}));

interface ConfirmDeletionProps {
  note: Note;
}

const ConfirmDeletion = NiceModal.create(
  ({ note }: ConfirmDeletionProps) => {
    return (
      <Dialog
        open={true}
        onClose={() => {
          NiceModal.remove("confirm-note-deletion");
        }}
      >
        <StyledNoteFormContainer>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "300px",
            }}
          >
            {"Are you sure you'd like to delete this note?"}
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <NoteButton
              variant="delete"
              action="confirm"
              note={note}
            />
            <NoteButton variant="delete" action="cancel" />
          </div>
        </StyledNoteFormContainer>
      </Dialog>
    );
  }
);

export default ConfirmDeletion;
