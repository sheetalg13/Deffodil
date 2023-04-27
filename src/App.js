import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/main/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
