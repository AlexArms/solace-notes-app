import { Button, styled } from "@mui/material";

interface StyledButtonProps {
  bgColor: string;
}

export const StyledButton = styled(Button, {
  shouldForwardProp: (propName: string) =>
    !["bgColor"].includes(propName),
})<StyledButtonProps>(({ bgColor }) => ({
  all: "unset",
  fontSize: "1.15rem",
  borderRadius: "2px",
  padding: "8px 14px",
  color: "#fff",
  backgroundColor: bgColor,
  cursor: "pointer",
  ":hover": {
    // transform: "translateY(2px)",
    transform: "scale(1.05)",
    transition: "all 100ms linear",
    backgroundColor: bgColor,
  },
}));
