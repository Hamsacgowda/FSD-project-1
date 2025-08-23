# 📚 Book Management API

A secure REST API for managing books with user authentication, built using **Node.js, Express, MongoDB, and JWT**.  
Users can register, log in, and manage their personal collection of books.

---

## 🚀 Features
- 🔐 **User Authentication** (JWT-based login & registration)
- 👤 **Secure Routes** (only authenticated users can access their books)
- 📖 **Book Management** (Add, View, Delete books)
- 🗄 **MongoDB Database** integration with Mongoose
- 🔑 Passwords are **hashed with bcrypt**

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Security:** bcrypt for password hashing
- **Other:** dotenv for environment variables, cors for cross-origin support

---

## 📂 Project Structure
book/
├── backend/ # Server (Node.js + Express + MongoDB)
│ ├── models/ # Mongoose models (User, Book)
│ ├── routes/ # API routes
│ ├── .env # Environment variables
│ ├── index.js # Main server file
│ ├── package.json
│
├── frontend/ # Client (React)
│ ├── public/ # Static files
│ ├── src/ # React components & pages
│ ├── package.json
│
├── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Hamsacgowda/FSD-project-1.git
cd FSD-project-1
🔧 Backend Setup

1. Navigate to backend folder:

cd backend

2. Install dependencies:

npm install

3. Create a .env file and add:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

4. Start backend:

npm start


Runs at: http://localhost:5000


💻 Frontend Setup

1. Navigate to frontend folder:

cd frontend


2. Install dependencies:

npm install


3. Start frontend:

npm start

Runs at: http://localhost:3000

📌 API Endpoints (Backend)
Auth

POST /api/register → Register user

POST /api/login → Login & get JWT

Books (Require JWT)

GET /api/books → Fetch all user books

POST /api/books → Add new book

DELETE /api/books/:id → Delete book

✅ Workflow

Run backend (http://localhost:5000)

Run frontend (http://localhost:3000)

Register/Login → Use token to manage books

---

⚡ This version matches your **MERN project** with both backend and frontend setup.  

Do you want me to also add **frontend usage details** (like React pages/components and how they interact with API), or keep it backend-focused?
