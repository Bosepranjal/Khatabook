•Project-Name : Khatabook
Khatabook is a backend application designed to help users track their daily expenses efficiently. This project is developed as part of my coursework at LNCTS Bhopal.

▪ Table of Contents :
Project Overview
Features
Technologies Used
Dependencies
Installation
Usage
API Endpoints
Contributing
Author

▪ Project Overview:
Khatabook allows users to record their daily expenses, categorize them, and view their spending patterns over time. The application aims to provide a simple and intuitive interface for managing personal finances.

▪ Features :
User authentication (sign up and login)
Add, edit, and delete expenses
View expense history

▪ Technologies Used :
Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Tokens) for authentication

▪ Dependencies installed or Packages required :
npm i express
npm i ejs
npm i nodemon
Required('fs') --> file-systems node.js builtin package for creating,deleting & reading files on the system.

▪ Installation:
To get started with Khatabook, follow these steps:

Clone the repository:
bash
Run
Copy code
git clone https://github.com/yourusername/khatabook.git

Navigate to the project directory:
bash
Run
Copy code
cd khatabook
Install the required dependencies:

bash
Run
Copy code
npm install
▪ add your MongoDB connection string:

Run
Copy code
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the server:

bash
Run
Copy code
npm start
OR visit URl : https://localhost:3000/ after starting the server via nodemon app.js

▪ Usage:
Once the server is running, you can use tools like Postman or Insomnia to interact with the API. You can register a new user, log in, and start managing your expenses.

▪ API Endpoints:
Here are some of the key API endpoints available in Khatabook:

GET / - Retrieve all expenses for the logged-in user
GET /hisaab/:filename - Create hisaab as per filename
POST /update/:filename - Updates an existing filename
POST /createhisaab - Add or create a new expense
GET /edit/:filename - Edit an existing expense
GET /delete/:filename - Delete an expense

▪ Contributing:
Contributions are welcome! If you have suggestions for improvements or want to report a bug, please open an issue or submit a pull request.

▪ Author :
Pranjal Bose
CSE Student
LNCTS Bhopal
Enrollment No: 0157CS221150
