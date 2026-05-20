
# Simple One-on-One Chat App

#### Video Demo: https://www.youtube.com/watch?v=p_fsbgJK1Xw
#### Description:
This is my final project for CS50x — a simple real-time chat application built using Flask, Socket.IO, HTML, CSS, and JavaScript. The app enables two or more users to join the same room and communicate instantly via WebSockets, all running locally without a login system or persistent database.

The goal of the project was to understand real-time web communication, build a full-stack application, and gain hands-on experience with frontend-backend interaction using WebSockets.

---

## Features

- Real-time messaging using WebSockets (via Flask-SocketIO)
- Join and leave chat rooms by typing a username and room name
- System messages that indicate when users join or leave
- Clean, minimalistic frontend UI
- All user data stored temporarily in memory (no login or database)
- Works locally via localhost and accessible in browser

---

## How It Works

When a user opens the app in the browser, they are asked to provide a username and room name. Upon clicking "Join," the browser connects to the server using WebSockets. The server registers the user under a unique session ID (SID) and assigns them to the room they specified.

Whenever a message is typed and sent, it is emitted to the server via Socket.IO, which in turn broadcasts it to all users in the same room. System events like joining or leaving are also broadcasted in real time.

Everything happens without page reloads — communication is fast and continuous as long as the user remains connected.

---

## File Overview

### 📁 `app.py`
This is the Flask backend and the WebSocket server logic.

- Initializes the Flask app and SocketIO.
- Stores connected users in a Python dictionary called `users`, using their session ID as key.
- Handles four main events:
  - `connect`: when a user joins the site
  - `join`: when they submit their username and room name
  - `message`: when they send a chat message
  - `disconnect`: when they close the page or exit

Flask-SocketIO manages rooms and broadcasts efficiently using `join_room`, `leave_room`, and `emit`.

### 📁 `templates/index.html`
This is the main HTML template for the web app.

- Provides input fields for username and room.
- Renders the chat interface dynamically once the user joins.
- Loads external scripts like `socket.io.min.js` and `main.js`.

### 📁 `static/main.js`
Handles all frontend JavaScript logic.

- Connects to the Socket.IO server with `const socket = io();`
- Listens for events like `message` from the server.
- Sends events like `join` and `message` from the client.
- Updates the HTML DOM with new messages in real time.

Includes code to switch from the join form to the chat window once connected.

### 📁 `static/style.css` (optional)
Basic styles for layout and readability. You can style the form, chat box, and message bubbles here.

---

## Design Choices

### ✅ Why Flask + Socket.IO?
I chose Flask because it's lightweight and beginner-friendly. Flask-SocketIO integrates easily and provides powerful real-time support without needing Node.js. This also allowed me to write both the backend and server-side WebSocket logic in pure Python.

### ✅ Why No Database?
Since the goal was to demonstrate real-time communication, persistent storage wasn’t needed. Everything is stored in memory during the session. If extended, I would integrate SQLite or Firebase for storing users, chat history, and authentication.

### ✅ Why Rooms?
Socket.IO supports the concept of rooms, which is perfect for group chats. It allows messages to be sent only to users in the same chat space, which keeps things clean and isolated. This can also scale up to multiple room types in the future.

### ✅ Keeping it Simple
Rather than adding too many features (like emojis, multiple rooms UI, or authentication), I focused on core functionality: fast, real-time one-on-one or small group chat with instant feedback. The interface is clean and purpose-driven.

---

## Possible Improvements

Here’s what I would add with more time:

- User authentication (login + registration)
- Persistent chat history with a database (SQLite or PostgreSQL)
- Typing indicators ("Gabriel is typing…")
- Online/offline status
- Message timestamps
- Better error handling and input validation
- Responsive mobile design (via Bootstrap)

---

## Installation & Usage

1. **Clone the repo:**

   ```bash
   git clone https://github.com/geboss1/simple-chat
   cd simple-chat
   ```

2. **Install dependencies:**

   paste into terminal:   pip install flask flask-socketio
   

3. **Run the app:**

   paste into terminal: python -m flask run 

4. **Open in browser:**

   Visit `http://127.0.0.1:5000` in two tabs to simulate two users.


---

## What I Learned

This project helped me better understand:
- How to create and run a Flask app
- How WebSockets work behind the scenes
- How frontend JavaScript interacts with a backend in real time
- How to design simple, clean interfaces that serve the core goal

It was a great learning experience that brought together HTML, JS, Python, and real-time thinking.



