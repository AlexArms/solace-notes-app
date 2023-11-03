import { Button, styled } from "@mui/material";

const StyledLoginButton = styled(Button)(() => ({
  fontFamily: "Ubuntu, sans-serif",
  marginTop: "40px",
  width: "200px",
  height: "35px",
  boxShadow: "0px 0px 2px white",
  borderRadius: "8px",
  fontSize: "1.25rem",
  color: "white",
  ":hover": {
    transform: "scale(1.05)",
    transition: "all 100ms linear",
  },
}));
const StyledLoginInput = styled("input")(() => ({
  width: "250px",
  height: "30px",
  fontSize: "1.25rem",
  fontFamily: "Ubuntu, sans-serif",
}));

const Login = () => {
  return (
    <div
      style={{
        width: "30%",
        minWidth: "500px",
        background: "#0f0f0f",
        borderRadius: "4px",
        margin: "10% auto",
        aspectRatio: 1 / 0.65,
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <label
        htmlFor="username"
        style={{
          fontSize: "1.5rem",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        Username:{" "}
      </label>
      <StyledLoginInput
        type="text"
        placeholder="Abc..."
        name="username"
      />
      <label
        htmlFor="password"
        style={{
          fontSize: "1.5rem",
          fontFamily: "Ubuntu, sans-serif",
        }}
      >
        Password:{" "}
      </label>
      <StyledLoginInput
        type="text"
        placeholder="123..."
        name="password"
      />
      <StyledLoginButton>Login</StyledLoginButton>
    </div>
  );
};

export default Login;
