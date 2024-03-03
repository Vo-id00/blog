# Backend Blog Project

This is a simple backend blog project built using JavaScript, Node.js, Express.js, and MongoDB. It provides APIs for storing and fetching blog data.

## Features

- **Create Blogs**: Store blog details such as title, content, and author name using POST API.
- **Fetch Blogs**: Retrieve all blogs stored in the database using GET API.

## Technologies Used

- JavaScript
- Node.js
- Express.js
- MongoDB

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible remotely

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/backend-blog-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd backend-blog-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB URI:

   ```
   MONGODB_URI=YOUR_MONGODB_URI
   ```

### Running the Server

Start the Express server:

```bash
node app.js
```

By default, the server will run on port 3000. You can change the port by setting the `PORT` environment variable in the `.env` file.

## API Endpoints

- **POST /api/blogs**: Store blog details.
- **GET /api/blogs**: Fetch all blogs stored in the database.

## Usage

You can use tools like Postman to send requests to the API endpoints and test the functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
