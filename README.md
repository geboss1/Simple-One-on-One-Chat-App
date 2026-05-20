# Simple-One-on-One-Chat-App
A real-time web chat application built with Python, Flask, and Socket.IO as my final project for CS50.

This project allows two or more users to communicate instantly in private chat rooms using WebSockets. Users can join a room with a username, send messages in real time, and see when other users join or leave the conversation.

Features:
Real-time messaging using Socket.IO
Private chat rooms
Live join/leave status updates
Simple and clean interface
Built with Flask and JavaScript
Supports multiple users and rooms
Technologies Used:
Python
Flask
Flask-SocketIO
HTML
CSS
JavaScript
WebSockets
How It Works:
A user enters a username and room name.
The application connects the user to the selected room.
Messages are instantly broadcast to everyone inside the same room.
Users receive live notifications when someone joins or leaves.
Project Structure
app.py — Flask server and Socket.IO events
templates/index.html — Main frontend page
static/main.js — Client-side Socket.IO logic
What I Learned:

Through this project, I learned:

How real-time communication works with WebSockets
How to use Flask with Socket.IO
Client-server event handling
Managing rooms and connected users
Building interactive full-stack web applications
Future Improvements
User authentication
Message history with a database
Online/offline indicators
Better UI design
File and image sharing
End-to-end encryption
