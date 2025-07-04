# Notes App (MERN Thinkboard)

A full-stack MERN application for creating, viewing, updating, and deleting notes. Features a modern UI, rate limiting, and secure backend API.

## Features

- Create, view, edit, and delete notes
- Responsive and creative UI with Tailwind CSS & DaisyUI
- Rate limiting to prevent abuse
- Environment-based API key management
- Animated and gradient backgrounds
- RESTful API with Express and MongoDB

## Tech Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Upstash Redis (for rate limiting)
- **Other:** dotenv, CORS, hot-toast

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB database (Atlas or local)
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   ```

2. **Backend setup:**
   ```bash
   cd backend
   npm install
   # Create a .env file based on .env.example and add your credentials
   npm run dev
   ```

3. **Frontend setup:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

4. **Visit the app:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create a `.env` file in the `backend` folder with:
```
MONGO_URI=your_mongodb_connection_string
PORT=5001
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
NODE_ENV=development
```

## Folder Structure

```
MERN-THINKBOARD/
  backend/
    src/
      config/
      controllers/
      middleware/
      models/
      routes/
    .env
  frontend/
    src/
      components/
      pages/
      lib/
      App.jsx
      main.jsx
```

## License

This project is licensed under the MIT License.

---

**Made with ❤️ using the MERN