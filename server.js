//подключили фраемворк
const express = require('express');
const cors = require('cors');


//создаем приложение
const app = express();
const port = 9999;

const corsOptions = {
  origin: 'https://localhost:3000', // домен сервиса, с которого будут приниматься запросы
  optionsSuccessStatus: 200 // для старых браузеров
}
app.use(cors(corsOptions)); // если не указать corsOptions, то запросы смогут слать все запросы

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

const rooms = new Map();

//если перйти localhos:9999/users запуститься функция
//res ответ req все что пришлет пользователь
app.get('/rooms',  cors(corsOptions), (req, res) => {
  // console.log('hello')

  //так получим строку
  // res.send(rooms)

  // rooms.set('hello', '');

  //так получим json обьект
  res.json(rooms)
});

//когда произошло подключение получаем переменую сокет
io.on('connection', (socket) => {
  console.log('user connect', socket.id);
});

//следим за портом
server.listen(port, (err) =>{
  //если ошибка есть
  if(err) {
    throw Error(err)
  }
  console.log('Сервер запущен')
});
