import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div style={container}>
      <div style={glow}></div>

      <form onSubmit={handleSubmit} style={card}>
        <h2 style={title}>Welcome Back</h2>

        {/* EMAIL */}
        <div style={inputGroup}>
          <input
            type="email"
            required
            value={form.email}
            style={input}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <label
            style={{
              ...label,
              top: form.email ? "-8px" : "50%",
              fontSize: form.email ? "11px" : "13px",
              color: form.email ? "#38bdf8" : "#94a3b8"
            }}
          >
            Email
          </label>
        </div>

        {/* PASSWORD */}
        <div style={inputGroup}>
          <input
            type={show ? "text" : "password"}
            required
            value={form.password}
            style={input}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <label
            style={{
              ...label,
              top: form.password ? "-8px" : "50%",
              fontSize: form.password ? "11px" : "13px",
              color: form.password ? "#38bdf8" : "#94a3b8"
            }}
          >
            Password
          </label>

          <span style={eye} onClick={() => setShow(!show)}>
            {show ? "🙈" : "👁️"}
          </span>
        </div>

        <button style={button}>Login</button>

        <p style={text}>
          No account?{" "}
          <span style={link} onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

/* 🔥 STYLES */

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
  background: "radial-gradient(circle, #2563eb55, transparent)",
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
  gap: "20px",
  boxShadow: "0 0 40px rgba(0,0,0,0.6)",
  border: "1px solid rgba(255,255,255,0.1)"
};

const title = {
  textAlign: "center",
  color: "white",
  fontSize: "26px"
};

const inputGroup = {
  position: "relative"
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "transparent",
  color: "white",
  outline: "none",
  fontSize: "14px"
};

const label = {
  position: "absolute",
  left: "12px",
  transform: "translateY(-50%)",
  background: "#020617",
  padding: "0 5px",
  transition: "0.2s ease",
  pointerEvents: "none"
};

const eye = {
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer"
};

const button = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  background: "linear-gradient(135deg, #2563eb, #3b82f6)",
  color: "white",
  fontSize: "16px",
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