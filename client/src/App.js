import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Topnavbar from './components/topnavbar';
import Login from './components/login';
import SignUp from './components/signup';
import React from 'react';
import About from './components/about';
import Home from './components/home';
import UserHome from './components/user/userHome'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topnavbar' element={<Topnavbar />} />
        <Route path='/about' element={<About /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/userHome' element={<UserHome />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
