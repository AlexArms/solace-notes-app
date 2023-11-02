"use client";
"useclient";

const Login = () => {
  return (
    <div
      style={{
        width: "25%",
        minWidth: "350px",
        background: "#0f0f0f",
        borderRadius: "4px",
        margin: "10% auto",
        aspectRatio: 1 / 1,
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="Abc..."
        name="username"
        style={{ width: "250px", height: "30px" }}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        placeholder="123..."
        name="password"
        style={{ width: "250px", height: "30px" }}
      />
      <button
        style={{
          marginTop: "40px",
          width: "200px",
          height: "35px",
          borderRadius: "8px",
          fontSize: "1.25rem",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
