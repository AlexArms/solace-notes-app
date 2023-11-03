import { useNewNoteStore } from "@/stores/NewNoteStore";
import {
  Box,
  Dialog,
  FormLabel,
  Input,
  Slide,
  Snackbar,
  TextareaAutosize,
  styled,
} from "@mui/material";

import NiceModal from "@ebay/nice-modal-react";
import { Note } from "@/types/Note";
import NoteActionButton from "../Buttons/NoteActionButton";
import { useEffect } from "react";

const StyledNoteFormContainer = styled(Box)(() => ({
  background: "#0f0f0f",
  height: "100%",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  width: "100%",
  justifyContent: "center",
  gap: "20px",
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
    const {
      updateNewNoteData,
      clearNewNoteData,
      showSnackbar,
      setShowSnackbar,
    } = useNewNoteStore();

    useEffect(() => {
      if (note !== undefined) {
        updateNewNoteData(note);
      } else {
        clearNewNoteData();
      }
    }, [note, updateNewNoteData, clearNewNoteData]);

    return (
      <Dialog
        open={true}
        sx={{
          height: "100%",
          ".MuiDialog-container": {
            width: "100%",
          },
          ".MuiPaper-root": {
            width: "100%",
            height: "fit-content",
          },
          ".MuiDialog-root": {
            width: "100%",
            height: "100%",
          },
        }}
        onClose={() => {
          NiceModal.remove("create-or-edit-note");
        }}
        TransitionComponent={Slide}
        transitionDuration={500}
        //@ts-ignore - // todo: fix typing
        TransitionProps={{ direction: "up" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
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
              onChange={(event) =>
                updateNewNoteData({
                  title: event.target.value,
                })
              }
            />
            <StyledFormLabel htmlFor="content">
              Note content
            </StyledFormLabel>
            <StyledTextArea
              minRows={6}
              name="content"
              placeholder="Write your note here"
              defaultValue={note?.content || ""}
              onChange={(event) =>
                updateNewNoteData({
                  content: event.target.value,
                })
              }
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
        <Snackbar
          open={showSnackbar}
          onClose={() => setShowSnackbar(false)}
          message="Note length must be between 20 and 300 characters and you must have a title."
          autoHideDuration={4_000}
        />
      </Dialog>
    );
  }
);

export default NoteModal;
