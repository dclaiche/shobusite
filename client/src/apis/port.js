import io from 'socket.io-client';

const port = "https://playshobu.herokuapp.com/" //"http://127.0.0.1:8000/"; //need to change it before deployment, enable CORS
// const port = "http://127.0.0.1:8000/" //need to change it before deployment, enable CORS
const socket = io(port);
export default socket;