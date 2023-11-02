import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        fontSize: "2rem",
        display: "flex",
        position: "sticky",
        bottom: 0,
        justifyContent: "center",
        gap: "50px",
        marginBottom: "50px",
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
  );
};

export default Footer;
