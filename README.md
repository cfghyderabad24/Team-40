# Team-40

# Next Skills 360 

# Leading Dashboard

This project is a dashboard application that provides functionality for managing tracks and leads. The backend is built with Node.js, Express, and MongoDB, and the frontend is built with React.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [License](#license)

## Features

- Manage Tracks
- Manage Leads
- Fetch and display data from MongoDB
- Dynamic content rendering on the frontend

## Technologies

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- UUID
- Faker.js

### Frontend

- React
- Bootstrap

## Installation

### Prerequisites

- Node.js and npm
- MongoDB

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/leading-dashboard.git
   cd leading-dashboard/backend
    ```

2. Install dependencies:
   ```sh
    npm install
   ```
3. Create a .env file in the backend directory with the following content:
   ```env
    MONGO_URI=mongodb://127.0.0.1:27017/leading
   ```
4. Start the backend server:
  ```sh
    npm start
  ```
## FrontEnd Setup
1. Navigate to the frontend directory:
  ```sh
   cd ../frontend
  ```
2. Install dependencies:
  ```sh
    npm install
  ```
3. Start the frontend server:
   ```sh
     npm start
   ```
## Usage
  Access the frontend application at http://localhost:3000
  The backend server runs on http://localhost:3001
## Endpoints
  GET /
  Description: Base endpoint to check if the server is running
  Response: "Hello World!"
  GET /track
  Description: Fetch all tracks
  Response: JSON array of track objects
  GET /leads
  Description: Fetch all leads
  Response: JSON array of lead objects
  POST /textPrompt
  Description: Process text prompt
  Request Body:
## License
This project is licensed under the MIT License. See the LICENSE file for details.
project-root/
│
├── backend/
│ ├── model/
│ │ ├── lead.js
│ │ ├── track.js
│ │ └── order.js
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── component/
│ │ │ ├── Lead.js
│ │ │ ├── Navbar.js
│ │ │ └── Track.js
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
│
└── README.md
 <br /> <br /> The code ("Code") in this repository was created solely by the student teams during a coding competition hosted by JPMorgan Chase Bank, N.A. ("JPMC"). JPMC did not create or contribute to the development of the Code. This Code is provided AS IS and JPMC makes no warranty of any kind, express or implied, as to the Code, including but not limited to, merchantability, satisfactory quality, non-infringement, title or fitness for a particular purpose or use.