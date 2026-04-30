import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending register request...");

      await API.post("/auth/signup", form);

      alert("Account created! Please login 🔐");

      // ❌ REMOVE token storing
      // ❌ REMOVE dashboard redirect

      // ✅ Redirect to login page
      navigate("/login");

    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Register failed ❌");
    }
  };

  return (
    <div style={container}>
      <div style={glow}></div>

      <form onSubmit={handleSubmit} style={card}>
        <h2 style={title}>Create Account</h2>

        <input
          placeholder="Name"
          value={form.name}
          style={input}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          value={form.email}
          style={input}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          style={input}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button style={button}>Register</button>

        <p style={text}>
          Already have account?{" "}
          <span style={link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

/* 🎨 STYLES */

const container = {
  height: "100vh",
  background: "linear-gradient(135deg, #0f172a, #020617)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "sans-serif",
  position: "relative",
  overflow: "hidden"
};

const glow = {
  position: "absolute",
  width: "400px",
  height: "400px",
  background: "radial-gradient(circle, #22c55e55, transparent)",
  filter: "blur(80px)"
};

const card = {
  backdropFilter: "blur(15px)",
  background: "rgba(255,255,255,0.05)",
  padding: "40px",
  borderRadius: "20px",
  width: "340px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  boxShadow: "0 0 40px rgba(0,0,0,0.6)",
  border: "1px solid rgba(255,255,255,0.1)"
};

const title = {
  textAlign: "center",
  color: "white",
  fontSize: "24px"
};

const input = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "white",
  outline: "none"
};

const button = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg, #22c55e, #16a34a)",
  color: "white",
  cursor: "pointer"
};

const text = {
  color: "#94a3b8",
  textAlign: "center",
  fontSize: "14px"
};

const link = {
  color: "#38bdf8",
  cursor: "pointer"
};