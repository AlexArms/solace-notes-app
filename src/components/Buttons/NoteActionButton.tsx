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

const actionToBgColorMapping: Partial<{
  [value in NoteAction]: string;
}> = {
  delete: "rgb(255, 0, 0)",
  create: "rgb(0, 153, 0)",
  edit: "rgb(82, 122, 122)",
  update: "rgb(0, 153, 0)",
};

const NoteActionButton = ({
  variant,
  note,
  action,
}: NoteButtonProps) => {
  const { mutateNotes } = useNotes();

  return (
    <StyledButton
      bgColor={
        action === "cancel"
          ? "rgb(0, 153, 0)"
          : actionToBgColorMapping[variant] || ""
      }
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
