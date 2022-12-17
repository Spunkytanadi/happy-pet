import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Hometopnavbar from '../src/pages/hometopnavbar';
import Home from '../src/pages/home';
import Login from '../src/pages/login';
import SignUp from '../src/pages/signup';
import Footer from '../src/pages/footer';
import React from 'react';
import Header from './pages/header';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hometopnavbar' element={<Hometopnavbar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/footer' element={<Footer />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
