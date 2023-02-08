import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Find from './components/Find';
import Login from './components/Login';
import MyInfo from './components/MyInfo';
import Chat from './components/Chat';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5000");
socket.on('msg', (data) => {
  console.log(data);
  socket.emit('reply', '여기는 리액트');
});

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/find' element={<Find/>}/>
            <Route path='/chat' element={<Chat/>}/>
            {/*추후 업데이트(로그인, 내정보)
            <Route path='login' element={<Login/>}/>}
            {<Route path='myinfo' element={<MyInfo/>}/>*/}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
