# DevPulse — RESTful Posts Management API

A RESTful API built with **Node.js, Express.js, MongoDB, and Mongoose** to manage developer posts. This project implements complete CRUD operations with data validation, structured responses, and centralized error handling.

## Features

- Create a new post.
- Retrieve all posts.
- Retrieve a single post using its ID.
- Update an existing post.
- Delete a post.
- Mongoose schema validation.
- MongoDB ObjectId validation.
- Centralized error handling.
- Automatic `createdAt` and `updatedAt` timestamps.
- JSON-based API responses.

## Tech Stack

- **Node.js** — JavaScript runtime.
- **Express.js** — Backend web framework.
- **MongoDB** — NoSQL database.
- **Mongoose** — MongoDB object modeling.
- **dotenv** — Environment variable management.
- **Postman** — API testing.
- **Nodemon** — Development server auto-restart.

## Project Structure

```text
task-3-post-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── postController.js
│
├── middleware/
│   └── errorMiddleware.js
│
├── models/
│   └── Post.js
│
├── routes/
│   └── postRoutes.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd task-3-post-management-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Replace the MongoDB value with your own MongoDB Atlas connection string.

**Important:** Never upload your actual `.env` file or database credentials to GitHub.

### 5. Run the development server

```bash
npm run dev
```

The API will run at:

```text
http://localhost:5000
```

## API Endpoints

Base URL:

```text
http://localhost:5000/api/posts
```

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/posts` | Create a new post |
| GET | `/api/posts` | Retrieve all posts |
| GET | `/api/posts/:id` | Retrieve a single post |
| PUT | `/api/posts/:id` | Update an existing post |
| DELETE | `/api/posts/:id` | Delete a post |

## Post Data Structure

Each post supports the following fields:

| Field | Type | Required | Description |
|---|---|---|---|
| title | String | Yes | Post title |
| content | String | Yes | Post content |
| authorName | String | Yes | Author's name |
| category | String | Yes | Post category |
| tags | Array of Strings | No | Post tags |
| status | String | No | `draft` or `published` |

The `status` field defaults to `draft`, and `tags` defaults to an empty array.

Mongoose automatically manages `createdAt` and `updatedAt` timestamps.

## Example Request Body

Use this JSON body when creating a post:

```json
{
  "title": "My Backend Development Journey",
  "content": "Today I built a RESTful API using Node.js, Express and MongoDB.",
  "authorName": "Moiz",
  "category": "Backend Development",
  "tags": ["Node.js", "Express", "MongoDB"],
  "status": "published"
}
```

For update requests, you can provide the fields you want to change.

## HTTP Status Codes

| Status Code | Description |
|---|---|
| 200 | Request successful |
| 201 | Post created successfully |
| 400 | Invalid request or validation error |
| 404 | Requested post or route not found |
| 500 | Internal server error |

## API Testing

The API endpoints were tested using **Postman**.

Testing covered:

- Creating posts.
- Retrieving all posts.
- Retrieving posts by ID.
- Updating existing posts.
- Deleting posts.
- Missing required fields.
- Invalid MongoDB IDs.
- Posts that do not exist.

## What I Learned

Through this project, I practised:

- Understanding the client-server architecture.
- Building RESTful APIs with Express.js.
- Connecting Node.js applications to MongoDB.
- Creating schemas and models with Mongoose.
- Implementing CRUD operations.
- Handling asynchronous operations using `async/await`.
- Using middleware for request processing and error handling.
- Testing API endpoints with Postman.

## Author

**Abdul Moiz**

GitHub: [abdul-moiz1687](https://github.com/abdul-moiz1687)
