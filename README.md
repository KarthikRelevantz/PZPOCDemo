# MERN-Stack-USERS

## How to use

1. CD into the project directories (frontend AND backend)
2. Run **npm install to install** all dependencies in **both** of those directories
3. Run **npm start** to run the frontend application
4. Run **npm run dev** to run the backend api

---

# 🧩 MERN-Stack-Users (In-Memory)

A simple **MERN-style users management app** built with **React + Express**, using **In-Memory storage** (no database).

> ⚠️ Users are stored in memory only and reset on server restart.

---

## ✨ Features

- Create users (name, email)
- View all users
- Delete users
- Global state management with **React Context + Reducer**
- RESTful API with **Express**
- In-Memory data storage (no MongoDB)

---

## 🗂 Project Structure

```
MERN-Stack-Users/
├─ backend/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ server.js
│  └─ package.json
│
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ context/
│  │  ├─ hooks/
│  │  └─ App.js
│  └─ package.json
```

---

## 🚀 How to Run the Project

### 1️⃣ Install dependencies

From **both** directories:

```bash
cd backend
npm install

cd ../frontend
npm install
```

---

### 2️⃣ Run the backend (API)

```bash
cd backend
npm run dev
```

Backend will run on:

```
http://localhost:4000
```

---

### 3️⃣ Run the frontend

```bash
cd frontend
npm start
```

Frontend will open at:

```
http://localhost:3000
```

---

## 🔌 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/users     | Get all users     |
| POST   | /api/users     | Create a new user |
| DELETE | /api/users/:id | Delete a user     |

---

## 🧠 Notes

- No database is used
- Data is stored **in memory**
- Users are reset when the server restarts
- Suitable for learning and assignments

---

## 📌 Tech Stack

- React
- React Context API
- Express.js
- Node.js
- JavaScript (ES6+)

---

## 🧪 Example User Object

```json
{
  "id": 1,
  "name": "Yitzhak",
  "email": "yitzhak@example.com"
}
```

---

## 📄 License
