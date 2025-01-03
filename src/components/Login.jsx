// src/components/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        backgroundColor: "#0d1117",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        color: "#f1f1f1",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Login
      </h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
          maxWidth: "400px",
          margin: "0 auto",
          width: "100%",
          backgroundColor: "#1a1a1a",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <label
          style={{
            fontSize: "18px",
            color: "#e1e1e1",
          }}
        >
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#2b2b2b",
              color: "#f1f1f1",
            }}
          />
        </label>
        <label
          style={{
            fontSize: "18px",
            color: "#e1e1e1",
          }}
        >
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#2b2b2b",
              color: "#f1f1f1",
            }}
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "15px 32px",
            textAlign: "center",
            fontSize: "16px",
            margin: "4px 2px",
            cursor: "pointer",
            border: "none",
            borderRadius: "12px",
            backgroundColor: "#4CAF50",
            color: "#f1f1f1",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;