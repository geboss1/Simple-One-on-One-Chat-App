const socket = io();

const joinBtn = document.getElementById('joinBtn');
const usernameInput = document.getElementById('username');
const roomInput = document.getElementById('room');
const statusDiv = document.getElementById('status');
const chatDiv = document.getElementById('chat');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send');

let joined = false;

function addMessage(text, isStatus = false) {
  const div = document.createElement('div');
  div.textContent = text;
  if (isStatus) {
    div.style.color = 'gray';
    div.style.fontStyle = 'italic';
  }
  chatDiv.appendChild(div);
  chatDiv.scrollTop = chatDiv.scrollHeight;
}

joinBtn.onclick = () => {
  const username = usernameInput.value.trim();
  const room = roomInput.value.trim();

  if (!username || !room) {
    alert('Please enter your name and room.');
    return;
  }

  socket.emit('join', { username, room });
  joined = true;

  usernameInput.disabled = true;
  roomInput.disabled = true;
  joinBtn.disabled = true;

  messageInput.disabled = false;
  sendBtn.disabled = false;

  statusDiv.textContent = `Joined room "${room}" as ${username}`;
};

sendBtn.onclick = () => {
  const msg = messageInput.value.trim();
  if (!msg) return;
  socket.emit('message', { msg });
  messageInput.value = '';
};

messageInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendBtn.click();
});

socket.on('message', data => {
  addMessage(`${data.username}: ${data.msg}`);
});

socket.on('status', data => {
  addMessage(data.msg, true);
});
