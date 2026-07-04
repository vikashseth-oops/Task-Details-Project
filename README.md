# 📋 Task Details Project

A secure **Task Management Web Application** built with **Node.js**, **Express.js**, **MongoDB**, and **EJS** following the **MVC architecture**. The application enables users to register, authenticate using JWT, and manage their own tasks through a clean server-side rendered interface.

## 🚀 Features

* 🔐 User Registration & Login
* 🍪 JWT Authentication using Cookies
* 🔒 Password Hashing with bcryptjs
* 📝 Create New Tasks
* 📋 View All Personal Tasks
* 👀 View Complete Task Details
* ✏️ Edit Existing Tasks
* ❌ Delete Tasks
* 👤 User-specific Task Management
* ✅ Input Validation
* 📂 MVC Project Structure
* 🎨 Server-side Rendering with EJS

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Frontend

* EJS
* HTML
* CSS

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* Cookie Parser
* bcryptjs

### Development

* Nodemon
* dotenv

---

## 📁 Project Structure

```text
Task-Details-Project/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   │
│   └── app.js
│
├── views/
│   ├── auth/
│   ├── tasks/
│   ├── partials/
│   └── show.ejs
│
├── public/
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/vikashseth-oops/Task-Details-Project.git
cd Task-Details-Project
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the application

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

Open your browser:

```
http://localhost:5000
```

---

## 🔄 Application Workflow

1. Register a new account.
2. Login securely using your credentials.
3. A JWT token is generated and stored in cookies.
4. Authentication middleware protects private routes.
5. Create, edit, view, and delete your own tasks.
6. Every task is associated with the authenticated user.
7. Users can only access and modify their own tasks.

---

## ✨ Key Highlights

* Secure authentication using JWT and cookies.
* Passwords are hashed before storing in MongoDB.
* Every database operation is scoped to the authenticated user.
* Input validation prevents empty task submissions.
* Clean MVC architecture for better scalability and maintainability.
* Server-side rendering with reusable EJS partials.

---

## 📚 What I Learned

* Building RESTful applications with Express.js
* MVC Architecture
* MongoDB CRUD Operations using Mongoose
* JWT Authentication
* Cookie-based Authentication
* Password Hashing with bcryptjs
* Route Protection using Middleware
* Server-side Rendering with EJS
* Organizing scalable backend projects

---

## 🚀 Future Improvements

* Task Priority Levels
* Due Date Support
* Search & Filter Tasks
* Task Categories
* Flash Messages
* Pagination
* Profile Management
* Responsive UI Improvements

---

## 👨‍💻 Author

**Vikash Seth**

GitHub: https://github.com/vikashseth-oops

---

## ⭐ Show Your Support

If you found this project helpful, consider giving this repository a **⭐ Star**.
