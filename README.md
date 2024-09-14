
# Todo List Web Application (MERN Stack)

A simple and user-friendly Todo List web application built using the MERN (MongoDB, Express, React, Node.js) stack. Users can register, log in, create their personal todo lists, mark tasks as completed, and manage their daily tasks efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- User authentication: Register and log in securely.
- Create a todo list with multiple tasks.
- Mark tasks as completed or pending.
- Edit or delete tasks from the todo list.
- Fully responsive design for desktop and mobile devices.

## project screenshot
![](https://github.com/khalilhasan23/todo-list-mern-stack/blob/main/project-images/Capture.PNG)
![](https://github.com/khalilhasan23/todo-list-mern-stack/blob/main/project-images/Capture2.PNG)
![](https://github.com/khalilhasan23/todo-list-mern-stack/blob/main/project-images/Capture1.PNG)
![](https://github.com/khalilhasan23/todo-list-mern-stack/blob/main/project-images/Capture3.PNG)

## Technologies Used

- **Frontend:**
  - Next.js (React Framework)
  - React Hooks
  - Axios (for HTTP requests)
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object modeling)
  
- **Authentication:**
  - JSON Web Tokens (JWT) for secure authentication
  - bcrypt.js for password hashing

- **Containerization:**
  - Docker

## Installation

To run this project locally without Docker, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/get-started) (for running with Docker)


### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/khalilhasan23/todo-list-mern.git
    cd todo-list-mern/backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the `backend` folder and add your environment variables:

    ```env
    MONGO_URI=mongodb://localhost:27017/todoapp
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```


### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm run dev
    ```


## Usage

1. Register a new user by clicking the "Register" button on the home page.
2. After registering, log in using your credentials.
3. Once logged in, you can create, edit, and delete tasks on your todo list.
4. Mark tasks as "completed" by clicking the checkbox next to each task.
5. Log out when you're done using the application.

## API Endpoints

The backend exposes the following API endpoints:

### Authentication

- **POST** `/api/auth/register`  
  Registers a new user.
  
- **POST** `/api/auth/login`  
  Authenticates a user and returns a JWT.

### Todos

- **GET** `/api/todos`  
  Fetches the list of todos for the authenticated user.

- **POST** `/api/todos`  
  Creates a new todo task.

- **PUT** `/api/todos`  
  Updates an existing todo task (e.g., mark as completed).

- **DELETE** `/api/todos/:id`  
  Deletes a todo task.


  ## Docker

To run the application using Docker, follow these steps:

### Prerequisites

Make sure Docker is installed on your machine. If not, follow the instructions [here](https://docs.docker.com/get-docker/).

### Build and Run the Docker Containers

1. Build and run the containers using Docker Compose:

    ```bash
    docker-compose up --build
    ```

2. Once the containers are up and running, the application will be accessible at:

    - Frontend (Next.js): [http://localhost:3000](http://localhost:3000)
    - Backend (Express API): [http://localhost:5000](http://localhost:5000)

### Stopping the Containers

To stop the running containers:

```bash
docker-compose down

