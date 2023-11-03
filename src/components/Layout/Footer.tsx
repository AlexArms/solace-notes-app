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
  // position: "sticky",
  // bottom: 0,
}));
const StyledHr = styled("hr")(() => ({
  width: "100%",
  borderLeftStyle: "none",
  borderRightStyle: "none",
  height: "2px",
}));
const StyledA = styled("a")(() => ({
  fontSize: "1.5rem",

  "@media (max-width: 500px)": {
    fontSize: "1.25rem",
  },
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
        <StyledA href="mailto: alexaarms96@gmail.com">
          Email Me
        </StyledA>
        <StyledA
          href="https://github.com/AlexArms?tab=repositories"
          target="_blank"
        >
          My Github
        </StyledA>
      </div>
    </StyledFooter>
  );
};

export default Footer;
