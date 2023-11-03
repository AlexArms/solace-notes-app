import { useNewNoteStore } from "@/stores/NewNoteStore";
import {
  Box,
  Dialog,
  Fade,
  FormLabel,
  Input,
  Slide,
  TextareaAutosize,
  styled,
} from "@mui/material";

import NiceModal from "@ebay/nice-modal-react";
import { Note } from "@/types/Note";
import NoteActionButton from "../Buttons/NoteActionButton";

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
  fontFamily: "Ubuntu, sans-serif",
}));
const StyledFormLabel = styled(FormLabel)(() => ({
  fontSize: "1.25rem",
  color: "#fff",
  fontFamily: "Ubuntu, sans-serif",
}));
const StyledInput = styled(Input)(() => ({
  color: "#fff",
  width: "60%",
  fontFamily: "Ubuntu, sans-serif",

  outline: "1px solid white",
  fontSize: "1.25rem",
  borderRadius: "2px",
}));
const StyledTextArea = styled(TextareaAutosize)(() => ({
  color: "#fff",
  fontSize: "1.25rem",
  width: "100%",
  borderRadius: "2px 2px 0 2px",
  fontFamily: "Ubuntu, sans-serif",
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
        TransitionComponent={Slide}
        transitionDuration={500}
        //@ts-ignore
        TransitionProps={{ direction: "up" }}
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
