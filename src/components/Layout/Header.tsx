import { useUserStore } from "@/stores/UserStore";
import { styled } from "@mui/material";
import Link from "next/link";
import React from "react";

const StyledHeader = styled("header")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  // backgroundColor: "rgb(0, 102, 34)",
  backgroundColor: "black",
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
  const userStore = useUserStore();
  return (
    <StyledHeader>
      <Link href="/">
        <StyledHeaderTitle>Solace Notes</StyledHeaderTitle>
      </Link>
      {userStore.user && (
        <p style={{ fontSize: "1.25rem" }}>
          Hi, {userStore.user}!
        </p>
      )}
      <StyledNav>
        <Link className="self-center" href="/">
          Notes
        </Link>
        |
        {userStore.user ? (
          <Link href="/" onClick={() => userStore.logout()}>
            Logout
          </Link>
        ) : (
          <Link className="self-center" href="/login">
            Login
          </Link>
        )}
        {/* <div
          id="g_id_onload"
          data-client_id="1045090794395-e38bg6suru579hu38be7aj2ne7mq1e63.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-login_uri="/login"
          data-auto_prompt="false"
        />
        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left"
        ></div> */}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
