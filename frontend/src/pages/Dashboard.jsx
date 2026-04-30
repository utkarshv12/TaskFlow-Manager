import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await API.get("/dashboard");
      setData(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createProject = async () => {
    try {
      await API.post("/projects", { name: "New Project" });
      fetchData();
    } catch (err) {
      alert("Error creating project");
    }
  };

  if (loading) return <h2 style={{ color: "white" }}>Loading...</h2>;

  return (
    <div style={container}>
      <h1 style={title}>Dashboard</h1>

      {/* Cards */}
      <div style={grid}>
        <Card title="Projects" value={data?.totalProjects} />
        <Card title="Tasks" value={data?.totalTasks} />
        <Card title="Completed" value={data?.completedTasks} />
        <Card title="Pending" value={data?.pendingTasks} />
      </div>

      {/* Buttons */}
      <div style={buttonContainer}>
        <button onClick={createProject} style={primaryBtn}>
          + Create Project
        </button>

        <button
          onClick={() => navigate("/projects")}
          style={secondaryBtn}
        >
          View Projects →
        </button>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={card}>
      <h2 style={number}>{value || 0}</h2>
      <p style={label}>{title}</p>
    </div>
  );
}

// 🔥 STYLES

const container = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "50px",
  color: "white",
  fontFamily: "sans-serif"
};

const title = {
  fontSize: "40px",
  marginBottom: "30px"
};

const grid = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  justifyContent: "center"
};

const card = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "15px",
  width: "180px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  transition: "0.3s"
};

const number = {
  fontSize: "32px",
  margin: "0"
};

const label = {
  marginTop: "10px",
  color: "#94a3b8"
};

const buttonContainer = {
  marginTop: "40px",
  display: "flex",
  gap: "15px"
};

const primaryBtn = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px"
};

const secondaryBtn = {
  padding: "12px 20px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px"
};