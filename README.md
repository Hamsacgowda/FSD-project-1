# Book Management System 📚

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) project for managing books.  
This application allows users to add, view, update, and delete book records with a clean UI and backend API integration.

## Project Structure 📂

FSD-project-1/  
├── backend/  
│   ├── models/            # Mongoose models (User, Record, etc.)  
│   ├── routes/            # Express routes (auth, records)  
│   ├── index.js           # Main backend server file  
│   ├── .env               # Environment variables  
│   └── package.json       # Backend dependencies  
│  
├── frontend/  
│   ├── src/  
│   │   ├── components/    # React components (Login, Register, Form, List)  
│   │   ├── api.js         # Axios API calls  
│   │   ├── App.js         # Main React app entry  
│   │   └── index.js       # React DOM render file  
│   └── package.json       # Frontend dependencies  
│  
└── README.md              # Project documentation

## Backend Setup ⚙️

1. Navigate to the backend folder:
   ```bash
   cd backend

2. Initialize a Node.js project (if not already done):
   ```bash
   npm init -y

3. Install required dependencies:
   ```bash
   npm install express mongoose cors dotenv bcryptjs jsonwebtoken

4. Install development dependencies (optional, for better workflow):
    ```bash
    npm install --save-dev nodemon

5. Create a .env file in the backend folder and add the following:
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
6. In package.json, update the scripts section for easier development:
   ```json
   "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
    }
7. Start the backend server:
   ```bash
   npm run dev

## Frontend Setup

1. Navigate to frontend folder:
   ```bash
   cd frontend

2. Install dependencies:
   ```bash
   npm install

3. Start the React app:
   ```bash
   npm start

Frontend will run at:
```bash
http://localhost:3000

```
## 🔗 API Endpoints

### Auth Routes
- **POST** `/api/auth/register` → Register a new user  
- **POST** `/api/auth/login` → Login user  

### Book Routes (Protected)
- **POST** `/api/books` → Add a new book  
- **GET** `/api/books` → Get all books  
- **PUT** `/api/books/:id` → Update a book  
- **DELETE** `/api/books/:id` → Delete a book

## Usage Guide

Start the backend server → http://localhost:5000

Start the frontend server → http://localhost:3000

Register a new user via the frontend

Login with your credentials

Manage books (Add, View, Update, Delete) from the dashboard

 
 ## Conclusion

This project is a simple Book Management System built with the MERN stack.
It demonstrates:

Authentication

JWT-based authorization

CRUD operations

Frontend-backend integration

## You can extend it by:

Adding search & filter for books

Adding profile management

Deploying backend (Heroku/Render) and frontend (Netlify/Vercel)
