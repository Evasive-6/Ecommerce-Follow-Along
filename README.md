# Ecommerce-Follow-Along

A hands-on project demonstrating the power of the MERN stack by creating a functional e-commerce platform.

## E-Commerce Application using MERN Stack
Welcome to the E-Commerce Application project! 🚀 This project involves building a full-fledged e-commerce platform from scratch using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This repository serves as a comprehensive guide and documentation for the application.

## 🌟 Features of the Application
### User Authentication:
Secure registration and login system.
### Product Management: 
Add, update, and retrieve product details.
### Order Handling: 
Seamlessly manage customer orders.
### REST API Integration: 
Well-structured endpoints for interaction.
### Database Schema Design: 
Efficient schema structure in MongoDB.
### Authentication & Authorization: 
Role-based access for secure transactions.
## 🛠 Core Concepts Covered
### Overview of the MERN Stack
The MERN stack is a widely used set of technologies for developing full-stack web applications:

### MongoDB: 
NoSQL database for flexible schema design.
### Express.js: 
Lightweight backend framework for building REST APIs.
### React.js: 
Frontend library for building user interfaces.
### Node.js: 
Runtime for executing JavaScript on the server side.
The MERN stack enables a JavaScript-only approach, streamlining development and making it easier to maintain both the frontend and backend using a single language.

### REST API Structure and Endpoints
#### The project includes a REST API to handle the following tasks:

### User Authentication
#### POST /api/auth/register: 
Register a new user.
### POST /api/auth/login: 
Authenticate an existing user.
## Product Management
### GET /api/products: 
Retrieve a list of all products.
### POST /api/products: 
Add a new product.
### PUT /api/products/:id: 
Update a product by ID.
### DELETE /api/products/:id: 
Remove a product by ID.
## Order Handling
### GET /api/orders: 
Retrieve all orders.
### POST /api/orders: 
Create a new order.
### GET /api/orders/:id: 
Retrieve order details by ID.
#### Each API endpoint interacts with the MongoDB database and serves structured data in JSON format.

## Basics of Database Schema Design
### MongoDB uses a flexible document-based schema. In this project:

### User Schema: 
Stores user details (e.g., name, email, password, role).
### Product Schema: 
Contains product details (e.g., name, price, description, stock).
### Order Schema: 
Tracks orders, including user info, product details, and order status.
The schemas are designed to ensure scalability and data integrity.

## Role of Authentication in Web Applications
#### Authentication is vital for securing web applications. In this project:

#### Users must authenticate to access sensitive features (e.g., placing orders).
#### JSON Web Tokens (JWT) are used to handle authentication securely.
#### Role-based access ensures that only authorized users can perform specific actions (e.g., admin users managing products).
## 📂 Project Structure
### Here’s an overview of the directory structure for the project:

#### e-commerce-app/ ├── backend/ # Backend folder │ ├── controllers/ # API controllers for handling requests │ ├── models/ # Mongoose schemas for MongoDB │ ├── routes/ # API route definitions │ ├── config/ # Configuration files (e.g., database connection) │ ├── middleware/ # Middleware for authentication and error handling │ └── server.js # Entry point for the backend ├── frontend/ # Frontend folder │ ├── src/ # Source files │ │ ├── components/ # Reusable UI components │ │ ├── pages/ # Pages for different views (e.g., Home, Product, Cart) │ │ ├── App.js # Main React application component │ │ └── index.js # Application entry point ├── .env # Environment variables ├── .gitignore # Files and directories to ignore in Git ├── README.md # Project documentation ├── package.json # Project metadata and dependencies └── ...

## 🚀 Getting Started
### Follow these steps to set up and run the project locally:

## Prerequisites
### Make sure the following tools are installed on your system:

### Node.js (v16+)
### npm (or yarn as an alternative package manager)
### MongoDB (v5+) - A running MongoDB instance (local or cloud-based, e.g., MongoDB Atlas)
### Installation Steps
### Clone the Repository
### Clone the project repository from GitHub and navigate to the project folder:
git clone https://github.com/your-username/e-commerce-app.git
### cd e-commerce-app

### Install Backend Dependencies Navigate to the backend folder and install the required packages:
cd backend
npm install
### Install Frontend Dependencies Navigate to the frontend folder and install the necessary dependencies:
cd ../frontend
npm install
### Set Up Environment Variables Create a .env file in the backend folder and add the following configuration:
#### MONGO_URI=your-mongodb-connection-string
#### JWT_SECRET=your-secret-key
#### PORT=5000
### Run the Application
### Start the Backend Navigate to the backend folder and start the development server:

#### cd backend
#### npm run dev
#### Start the Frontend Navigate to the frontend folder and start the React development server:

#### cd ../frontend
#### npm start
### Access the Application
#### Open your browser and navigate to http://localhost:3000 to view the frontend. The backend will run on http://localhost:5000.

## 🤝 Contributing
#### We welcome contributions to this project! To contribute:

### Fork the repository.
#### Create a feature branch:
git checkout -b feature-name
#### Commit your changes:
git commit -m "Add your message here"
#### Push to your fork:
git push origin feature-name

Open a pull request on the original repository.
