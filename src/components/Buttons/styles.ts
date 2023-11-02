import { Button, styled } from "@mui/material";

// interface StyledNoteButtonProps {
//   noteAction: NoteAction;
// }
export const StyledButton = styled(Button)(() => ({
  all: "unset",
  fontSize: "1.15rem",
  borderRadius: "2px",
  padding: "8px 14px",
  color: "#fff",
  backgroundColor: "green",
  ":hover": {
    // transform: "translateY(2px)",
    transform: "scale(1.05)",
    transition: "all 100ms linear",
    backgroundColor: "green",
    // noteAction === "create" || noteAction === "update"
    //   ? "rgb(0, 153, 0)"
    //   : noteAction === "delete"
    //   ? "rgb(255, 0, 0)"
    //   : "rgb(82, 122, 122)",
  },
}));
