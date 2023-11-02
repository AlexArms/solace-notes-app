import { useNewNoteStore } from "@/stores/NewNoteStore";
import {
  Box,
  Dialog,
  FormLabel,
  Input,
  TextareaAutosize,
  styled,
} from "@mui/material";

import NiceModal from "@ebay/nice-modal-react";
import { Note } from "@/types/Note";
import NoteActionButton from "../Buttons/NoteActionButton";

interface NodeModalProps {
  closeModal: () => void;
}

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
const StyledFormLabel = styled(FormLabel)(() => ({
  fontSize: "1.25rem",
  color: "#fff",
}));
const StyledInput = styled(Input)(() => ({
  color: "#fff",
  width: "60%",
  outline: "1px solid white",
  fontSize: "1rem",
  borderRadius: "2px",
}));
const StyledTextArea = styled(TextareaAutosize)(() => ({
  color: "#fff",
  fontSize: "1rem",
  width: "100%",
  borderRadius: "2px 2px 0 2px",
}));

interface NoteModalProps {
  note?: Note;
}

const NoteModal = NiceModal.create(
  ({ note }: NoteModalProps) => {
    const { updateNewNoteData } = useNewNoteStore();

    return (
      <Dialog
        open={true}
        onClose={() => {
          NiceModal.remove("create-or-edit-note");
        }}
      >
        <div
          style={{
            width: "400px",
            height: "400px",
          }}
        >
          <StyledNoteFormContainer>
            <StyledFormLabel htmlFor="title">
              Note Title
            </StyledFormLabel>
            <StyledInput
              type="text"
              name="title"
              placeholder="Note Title"
              defaultValue={note?.title || ""}
              onChange={updateNewNoteData}
            />
            <StyledFormLabel htmlFor="content">
              Note content
            </StyledFormLabel>
            <StyledTextArea
              minRows={6}
              name="content"
              placeholder="Write your note here"
              defaultValue={note?.content || ""}
              onChange={updateNewNoteData}
            />
            <NoteActionButton
              variant={
                note === undefined ? "create" : "update"
              }
              action="confirm"
              note={note}
            />
          </StyledNoteFormContainer>
        </div>
      </Dialog>
    );
  }
);

export default NoteModal;
