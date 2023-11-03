import { styled } from "@mui/material";
import React from "react";

const StyledFooter = styled("footer")(() => ({
  width: "100%",
  fontSize: "2rem",
  display: "flex",
  gap: "10px",
  background: "black",
  flexDirection: "column",
  paddingBottom: "10px",
  position: "sticky",
  bottom: 0,
}));
const StyledHr = styled("hr")(() => ({
  width: "100%",
  borderLeftStyle: "none",
  borderRightStyle: "none",
  height: "2px",
}));

const Footer = () => {
  return (
    <StyledFooter>
      <StyledHr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <a href="mailto: alexaarms96@gmail.com">Email Me</a>
        <a
          href="https://github.com/AlexArms?tab=repositories"
          target="_blank"
        >
          My Github
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
