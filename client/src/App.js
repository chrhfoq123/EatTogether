import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Find from './components/Find';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='find' element={<Find/>}/>
            <Route path='login' element={<Login/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
