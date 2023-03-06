import io from 'socket.io-client';

const port = "https://playshobu.herokuapp.com/message" 
// const port = "http://127.0.0.1:8000/message" //need to change it before deployment, enable CORS
const messageSocket = io(port);
export default messageSocket;