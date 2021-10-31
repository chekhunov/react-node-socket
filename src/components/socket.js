import io from 'socket.io-client';

//должен принимать адрес иначе подключиться по дефолту к сокетам
const socket = io()
// const socket = io('http://localhost:9999')

export default socket