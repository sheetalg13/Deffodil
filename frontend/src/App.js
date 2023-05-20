import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/main/navbar';
import Manageshope from './components/admin/manageshope';
import Admin from './components/admin';
import Manageflowers from './components/admin/Manageflowers';
import Manageusers from './components/admin/Manageusers';
import AdminAuth from './auth/AdminAuth';
import Listshope from './components/main/Listshope';
import Listflower from './components/main/Listflower';


function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Navigate to="/main/login" />} />
          <Route path="main" element={<Main />}>
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='browseshop' element={<Listshope />} />
            <Route path='browseflower/:id' element={<Listflower />} />
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='admin' element={ <AdminAuth> <Admin /> </AdminAuth> } >
            <Route path='manageshop' element={<Manageshope />} />
            <Route path='manageflowers' element={<Manageflowers/>}/>
            <Route path='manageusers' element={<Manageusers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
