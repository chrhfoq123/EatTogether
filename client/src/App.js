import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Find from './components/Find';

function App() {
  return (
    <div>
      <BrowserRouter>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='finding' element={<Find/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
