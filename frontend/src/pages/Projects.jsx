import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      fetchProjects(); // refresh
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>My Projects</h2>

      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
          {projects.map((p) => (
            <div key={p._id} style={card}>
              <h3>{p.name}</h3>

              <button onClick={() => deleteProject(p._id)} style={btn}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const card = {
  background: "#1f2937",
  padding: "20px",
  borderRadius: "10px",
  width: "200px"
};

const btn = {
  marginTop: "10px",
  padding: "5px 10px",
  background: "red",
  color: "white",
  border: "none",
  cursor: "pointer"
};