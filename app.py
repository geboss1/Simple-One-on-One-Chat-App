from flask import Flask, render_template, request
from flask_socketio import SocketIO, join_room, leave_room, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

users = {}  # Map session IDs to user info

@app.route('/')
def home():
    return render_template('index.html')

@socketio.on('join')
def handle_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    users[request.sid] = {'username': username, 'room': room}
    emit('status', {'msg': f'{username} has joined the room.'}, room=room)

@socketio.on('message')
def handle_message(data):
    user = users.get(request.sid)
    if not user:
        return
    room = user['room']
    username = user['username']
    msg = data['msg']
    emit('message', {'username': username, 'msg': msg}, room=room)

@socketio.on('disconnect')
def handle_disconnect():
    user = users.get(request.sid)
    if user:
        username = user['username']
        room = user['room']
        leave_room(room)
        emit('status', {'msg': f'{username} has left the room.'}, room=room)
        users.pop(request.sid)

if __name__ == '__main__':
    socketio.run(app, debug=True)
