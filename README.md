# Yoga Registration App

Welcome to the Yoga Registration App! This application allows users to register for yoga classes and provides a user-friendly interface for both the server and the React frontend.
## Requirements

- **Age Limit:** Participants must be aged 18-65.
- **Monthly Fees:** Participants pay 500 INR every month.
- **Batch Selection:** Four batches per day: 6-7 AM, 7-8 AM, 8-9 AM, and 5-6 PM. Participants can switch batches monthly.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the App](#running-the-app)
  - [Backend (Server)](#backend-server)
  - [Frontend (React App)](#frontend-react-app)
- [Database Design](#database-design)
  - [ER Diagram](#er-diagram)


## Project Structure

The project is organized into two main directories:

- **yoga-backend:** Contains the server-side code using Node.js and Express.
- **yoga-registration-form:** A React app for the frontend.

# Getting Started

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Git](https://git-scm.com/)
- [SQLite](https://www.sqlite.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/yoga-registration-app.git

2. Navigate to the project directory:

   ```bash
   cd yoga-registration-app
3. Install dependencies for the backend:
    ```bash
    cd yoga-backend
    npm install
 4. Install dependencies for the frontend:
    ```bash
    cd ../yoga-registration-form
    npm install
## Running the App
### Backend (Server)

- **Validation:** Validates user data received from the frontend.
- **Database Storage:** Stores user data in a database.
- **Payment Integration:** Simulates payment with a mock `CompletePayment()` function.
- **Response:** Sends a response to the frontend based on the payment outcome.
  
 1. Navigate to the yoga-backend directory:
    ```bash
     cd ../yoga-backend
 2. Run the server:
    ```bash
    node server.js
The server will be running at http://localhost:5000.

## Frontend (React App)

- **Form Submission:** Collects user details and sends them to the REST API.
- **Basic Validations:** Ensures data integrity through basic validations.
  
 1.Navigate to the yoga-registration-form directory:
`cd ../yoga-registration-form`<br>
 2.Run the React app:
   `npm start`<br>

 
The React app will be accessible at http://localhost:3000.


## Database Design
### ER Diagram
- **ER Diagram:** Includes an Entity Relationship (ER) diagram to illustrate the database structure.
- **Table SQLs:** Provides SQL statements for creating necessary tables.
    ```bash
    +---------------------+
    |  yoga_admissions   |
    +---------------------+
    | id (PK)             |
    | name (TEXT)         |
    | age (INTEGER)       |
    | selectedBatch (TEXT)|
    | joinDate (TEXT)     |
    +---------------------+
### In this diagram:

- id is the primary key (PK) of the table.
- name is a text field for storing the user's name.
- age is an integer field for storing the user's age.
- selectedBatch is a text field representing the batch the user selected.
- joinDate is a text field storing the user's joining date.
    
### Hosting

- **Cloud Hosting:** Hosted the solution on Netlify..<br>
[Visit the Yoga Registration App](https://yoga-registration-formm.netlify.app/)









