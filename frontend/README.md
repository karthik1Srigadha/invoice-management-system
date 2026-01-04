# Invoice Management System

## Project Overview
This is a simple **Invoice Management System** built using **React.js** for the frontend and **Node.js + Express** for the backend, with **SQLite** as the database.

The application allows users to:
- Sign up and log in
- Create invoices
- View invoices
- Update and delete invoices

This project demonstrates basic full-stack development concepts including CRUD operations, API integration, and database usage.

---

## Tech Stack

### Frontend
- React.js
- React Router
- CSS (simple iOS-style UI)

### Backend
- Node.js
- Express.js

### Database
- SQLite

---

## Features
- User Signup and Login
- Create Invoice
- View All Invoices
- Update Invoice
- Delete Invoice
- Clean and minimal UI
- REST API integration

---

## Project Structure

InvoiceManagementSystem/
├── backend/
│ ├── database/
│ │ └── db.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── invoices.js
│ ├── server.js
│ └── invoices.db
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Login.js
│ │ │ ├── Signup.js
│ │ │ ├── Home.js
│ │ │ └── InvoiceForm.js
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ └── package.json
│
└── README.md


---

## How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone <your-github-repo-url>
cd InvoiceManagementSystem

2. Run Backend Server
cd backend
npm install
node server.js


Backend will run at:

http://localhost:5000

3. Run Frontend Application

Open a new terminal:

cd frontend
npm install
npm start


Frontend will run at:

http://localhost:3000

How to Use the Application

Open the app in the browser

Sign up with name, email, and password

Log in using the same credentials

Click Add Invoice

Fill invoice details and save

View invoices on the Home page

Update or delete invoices if required

API Endpoints
Authentication

POST /auth/signup – Register user

POST /auth/login – Login user

Invoices

POST /invoices – Create invoice

GET /invoices – Get all invoices

PUT /invoices/:id – Update invoice

DELETE /invoices/:id – Delete invoice


