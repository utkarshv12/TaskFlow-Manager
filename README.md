# TaskFlow-Manager

This is a full stack **Project and Task Management System** developed using **Node.js, Express.js, MongoDB, and React**. The main purpose of this project is to help users organize their work by creating projects, managing tasks, and tracking their progress in an easy and structured way.

---

## 📌 Features

* User registration and login with secure authentication
* Role-based access (Admin and User)
* Create, view, and delete projects
* Add and manage tasks inside projects
* Update task status (pending or completed)
* Dashboard showing task and project summary
* Simple and clean user interface

---

## ⚙️ Working of the Project

This project follows a client-server model. The frontend sends requests to the backend, and the backend processes those requests and connects to the database. When a user logs in, a token is generated which is used to verify the user for further actions. After login, users can create projects and add tasks inside them. All data is stored in MongoDB and updated in real time when changes are made.

---

## 🌐 Project URL

You can run the project locally using:

http://localhost:5173/projects

---

## 📁 Project Structure

```id="2eqh7y"
taskflow-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   └── src/
│
└── README.md
```

---

## 🚀 How to Run

### Step 1: Clone the repository

```id="2s9c9c"
git clone https://github.com/your-username/taskflow-manager.git
cd taskflow-manager
```

### Step 2: Install dependencies

Backend:

```id="5y6j9g"
cd backend
npm install
```

Frontend:

```id="1r9n9o"
cd frontend
npm install
```

---

### Step 3: Start the project

Backend:

```id="i6jw1c"
npm start
```

Frontend:

```id="y59y7z"
npm run dev
```

---

## 🛠️ Technologies Used

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JWT

---

## 🎯 Future Scope

* Add task deadlines and reminders
* Improve UI design
* Add notifications
* Deploy project online

---

## 👨‍💻 Developer

Utkarsh Verma

---
