import useNotes from "@/hooks/useNotes";
import { Note, NoteAction } from "@/types/Note";
import React from "react";
import { StyledButton } from "./styles";
import NiceModal from "@ebay/nice-modal-react";

interface NoteButtonProps {
  variant: NoteAction;
  action: "confirm" | "prompt" | "cancel";
  note?: Note;
}
const variantButtonTextMapping = {
  delete: "Delete",
  create: "Create",
  edit: "Edit",
  update: "Submit",
};

const NoteActionButton = ({
  variant,
  note,
  action,
}: NoteButtonProps) => {
  const { mutateNotes } = useNotes();

  return (
    <StyledButton
      onClick={() => {
        if (action === "cancel") {
          NiceModal.remove("confirm-note-deletion");
        } else {
          mutateNotes({
            mutationType: variant,
            mutationData: { note },
          });
        }
      }}
    >
      {action === "cancel"
        ? "Cancel"
        : variantButtonTextMapping[variant]}
    </StyledButton>
  );
};

export default NoteActionButton;
