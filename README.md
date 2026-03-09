# Food Delivery Platform 🍔🚚

## 📘 Overview

**Food Delivery Platform** is a full-stack web application that allows users to browse food items, place orders, and interact with a backend API. The application uses the **MERN stack** — *MongoDB, Express.js, React.js, and Node.js* — and is organized into separate frontend and backend folders.

This project demonstrates key full-stack concepts such as REST API integration, database management, user flows, and state-driven UI.

---

## ⭐ Features

* User authentication (signup & login)
* Add items to cart
* Place and manage orders
* Modern frontend using React
* RESTful backend API with Express
* MongoDB database integration

---

## 🧱 Tech Stack

| Layer     | Technologies              |
| --------- | ------------------------- |
| Frontend  | React.js, JavaScript, CSS |
| Backend   | Node.js, Express.js       |
| Database  | MongoDB (via Mongoose)    |
| Utilities | Axios, dotenv, JWT        |

---

## 📁 Project Structure

```
food-delivery-platform/
├── client/        # React frontend
├── server/        # Express backend API
├── .gitignore
└── README.md
```

---

## 📥 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Bereket110/food-delivery-platform.git
cd food-delivery-platform
```

---

### 2. Setup Backend

```bash
cd server
npm install
```

Create a `.env` file in the **server** folder with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Setup Frontend

Open a new terminal:

```bash
cd ../client
npm install
npm run dev
```

The frontend runs at:

```
http://localhost:3000
```

(*or the port shown in your terminal*)

---

## 🔧 Environment Variables

Inside the **server/.env** file, include:

```
PORT
MONGO_URI
JWT_SECRET
```

Replace these with your actual configuration values.

---

## 📊 How It Works

1. React frontend sends HTTP requests to the Express backend.
2. The backend processes requests and connects to the MongoDB database.
3. Data is handled using Mongoose models.
4. Auth is handled with JWT tokens.
5. Users can browse food items, add to cart, and place orders.

---

## 📈 Future Improvements

* Add search/filter for food items
* Add user profile and order history
* Improve UI design and responsiveness
* Add payment integration
* Deploy to production

If you’d like, I can also add **API documentation**, **screenshots section**, **deployment instructions**, or **feature badges** to make this README even better!
