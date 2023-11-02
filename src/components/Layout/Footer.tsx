import { styled } from "@mui/material";
import React from "react";

const StyledFooter = styled("footer")(() => ({
  width: "100%",
  textAlign: "center",
  fontSize: "2rem",
  display: "flex",
  position: "sticky",
  bottom: 0,
  justifyContent: "center",
  gap: "50px",
  marginBottom: "50px",
}));

const Footer = () => {
  return (
    <StyledFooter>
      <a href="mailto: alexaarms96@gmail.com">Email Me</a>
      <a
        href="https://github.com/AlexArms?tab=repositories"
        target="_blank"
      >
        My Github
      </a>
    </StyledFooter>
  );
};

export default Footer;
