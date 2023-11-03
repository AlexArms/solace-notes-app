import NiceModal from "@ebay/nice-modal-react";
import { StyledButton } from "./styles";
import { Note, NoteAction } from "@/types/Note";

interface NotePromptButtonProps {
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
const actionToBgColorMapping: Partial<{
  [value in NoteAction]: string;
}> = {
  delete: "rgb(255, 0, 0)",
  create: "rgb(0, 102, 34)",
  edit: "rgb(82, 122, 122)",
};

const NotePromptButton = ({
  noteAction,
  note,
}: NotePromptButtonProps) => {
  const openNoteModal = () => {
    NiceModal.show(
      actionToPromptMapping[noteAction] || "",
      { note }
    );
  };

  return (
    <StyledButton
      onClick={openNoteModal}
      bgColor={actionToBgColorMapping[noteAction] || ""}
    >
      {actionToButtonTextMapping[noteAction]}
    </StyledButton>
  );
};

export default NotePromptButton;
