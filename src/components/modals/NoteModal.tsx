import { useNotesStore } from "@/stores/NotesStore";
import {
  Box,
  Dialog,
  FormLabel,
  Input,
  TextareaAutosize,
  styled,
} from "@mui/material";
import NoteButton from "../Buttons/NoteButton";

interface NodeModalProps {
  closeModal: () => void;
}

interface NoteFormProps {
  variant: "create" | "update";
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
  color: "#fff",
}));
const StyledInput = styled(Input)(() => ({
  color: "#fff",
  outline: "1px solid white",
  borderRadius: "2px",
}));
const StyledTextArea = styled(TextareaAutosize)(() => ({
  color: "#fff",
  width: "100%",
  borderRadius: "2px 2px 0 2px",
}));

const NoteModal = ({ closeModal }: NodeModalProps) => {
  const { updateNewNoteData } = useNotesStore();

  return (
    <Dialog open={true} onClose={closeModal}>
      <div
        style={{
          width: "400px",
          height: "400px",
        }}
      >
        <StyledNoteFormContainer>
          <div style={{ width: "100%" }}>
            <StyledFormLabel htmlFor="title">
              Note Title
            </StyledFormLabel>
            <StyledInput
              type="text"
              name="title"
              placeholder="Note Title"
              onChange={updateNewNoteData}
            />
          </div>
          <div style={{ width: "100%" }}>
            <StyledFormLabel htmlFor="content">
              Note content
            </StyledFormLabel>
            <StyledTextArea
              minRows={6}
              name="content"
              placeholder="Write your note here"
              onChange={updateNewNoteData}
            />
          </div>
          <NoteButton variant="create" />
        </StyledNoteFormContainer>
      </div>
    </Dialog>
  );
};

export default NoteModal;
