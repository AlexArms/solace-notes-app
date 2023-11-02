import useNotes from "@/hooks/useNotes";
import { NoteAction } from "@/types/Note";
import { Button, styled } from "@mui/material";
import React from "react";

interface NoteButtonProps {
  variant: NoteAction;
}
const variantButtonTextMapping = {
  delete: "Delete",
  create: "Create",
  update: "Edit",
};

interface StyledNoteButtonProps {
  noteAction: NoteAction;
}

const StyledNoteButton = styled(Button, {
  shouldForwardProp: (propName: string) =>
    !["action"].includes(propName),
})<StyledNoteButtonProps>(({ noteAction }) => ({
  all: "unset",
  fontSize: "1.15rem",
  borderRadius: "2px",
  padding: "8px 14px",
  backgroundColor:
    noteAction === "create"
      ? "rgb(0, 153, 0)"
      : noteAction === "delete"
      ? "rgb(255, 0, 0)"
      : "rgb(82, 122, 122)",
  ":hover": {
    // transform: "translateY(2px)",
    transform: "scale(1.05)",
    transition: "all 100ms linear",
    backgroundColor:
      noteAction === "create"
        ? "rgb(0, 153, 0)"
        : noteAction === "delete"
        ? "rgb(255, 0, 0)"
        : "rgb(82, 122, 122)",
  },
}));

const NoteButton = ({ variant }: NoteButtonProps) => {
  const { mutateNotes } = useNotes();

  return (
    <StyledNoteButton
      noteAction={variant}
      onClick={() =>
        mutateNotes({
          mutationType: variant,
          mutationData: {},
        })
      }
    >
      {variantButtonTextMapping[variant]}
    </StyledNoteButton>
  );
};

export default NoteButton;
