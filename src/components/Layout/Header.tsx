import { styled } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledHeader = styled("header")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "rgb(0, 102, 34)",
  alignItems: "center",
  padding: "0px 20px",
  height: "60px",
  zIndex: 10,
  position: "sticky",
  top: 0,
}));
const StyledHeaderTitle = styled("h1")(() => ({
  fontSize: "calc(32px + 1vw)",
}));
const StyledNav = styled("nav")(() => ({
  height: "60%",
  display: "flex",
  gap: "10px",
  width: "fit-content",
  padding: "10px",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderRadius: "4px",
  background: "white",
  color: "#000",
  boxShadow: "0px 0px 10px white",
}));

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>Solace Notes</StyledHeaderTitle>
      <StyledNav>
        <Link className="self-center" href="/">
          Home
        </Link>
        |
        <Link className="self-center" href="/login">
          Login
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
