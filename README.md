# 📝 Real-Time Collaborative Note App

A full-stack MERN application with real-time collaborative note editing using **Socket.IO**, **Express**, **MongoDB**, and **React + Vite**.

---

## 🚀 Features

- ✍️ Real-time note editing with Socket.IO
- 🧠 Multi-user collaboration in one note
- 📦 MERN stack (MongoDB, Express, React, Node)
- ⚡ Vite for blazing-fast frontend
- 🌐 RESTful API for note management
- 🎯 React Router for client-side routing

---

## 📁 Project Structure

real-time-note-app/
├── client/ # Frontend (Vite + React)
├── server/ # Backend (Express + MongoDB + Socket.IO)
├── .env # Environment variables
├── README.md


---

## 📦 Prerequisites

- Node.js v18+
- MongoDB Atlas or local MongoDB
- Git

---

## 🔧 Installation

Clone the repository:

git clone https://github.com/Ashish32507/real-time-note-app.git
cd real-time-note-app


cd client
npm install

cd ../server
npm install


🚀 Start the Application
▶️ Start Backend (Express + MongoDB)
bash
Copy
Edit
cd server
npm run start
Runs on: http://localhost:3000

💻 Start Frontend (React + Vite)
bash
Copy
Edit
cd client
npm run dev
Runs on: http://localhost:5173

🧪 API Endpoints
Method	Endpoint	Description
GET	/notes	Get all notes
POST	/notes	Create a new note
PUT	/notes/:id	Update a note
DELETE	/notes/:id	Delete a note

💬 Real-Time Events (Socket.IO)
Event	Payload	Description
join_note	noteId	Joins a room for collaboration
note_update	{ noteId, content }	Broadcasts note changes

🌐 Deployment Notes
Frontend can be deployed separately on Vercel (add vercel.json to support SPA routing).

Backend should serve frontend in production using express.static.

👨‍💻 Author
Built with ❤️ by Ashish Kumar Yadav

yaml
Copy
Edit

---

Let me know if you want this to include:
- Screenshots
- Live demo badge
- A license section (MIT, Apache, etc.)
