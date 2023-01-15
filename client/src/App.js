import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Main/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
