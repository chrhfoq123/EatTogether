import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Find from './components/Find';
import Login from './components/Login';
import MyInfo from './components/MyInfo';
import Chat from './components/Chat';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='find' element={<Find/>}/>
            <Route path='Chat' element={<Chat/>}/>
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
