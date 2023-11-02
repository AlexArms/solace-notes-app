import NiceModal from "@ebay/nice-modal-react";
import { StyledButton } from "./styles";
import { Note, NoteAction } from "@/types/Note";

interface NoteModalButtonProps {
  noteAction: NoteAction;
  note?: Note;
}

const actionToPromptMapping: Partial<{
  [value in NoteAction]: string;
}> = {
  delete: "confirm-note-deletion",
  create: "create-or-edit-note",
  edit: "create-or-edit-note",
};
const actionToButtonTextMapping: Partial<{
  [value in NoteAction]: string;
}> = {
  delete: "Delete",
  create: "Create New Note",
  edit: "Edit",
};

const NotePromptButton = ({
  noteAction,
  note,
}: NoteModalButtonProps) => {
  const openNoteModal = () => {
    NiceModal.show(
      actionToPromptMapping[noteAction] || "",
      { note }
    );
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "fit-content",
        marginTop: "35px",
      }}
    >
      <StyledButton onClick={openNoteModal}>
        {actionToButtonTextMapping[noteAction]}
      </StyledButton>
    </div>
  );
};

export default NotePromptButton;
