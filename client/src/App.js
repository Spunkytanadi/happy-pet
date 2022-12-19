import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Topnavbar from './components/topnavbar';
import Login from './components/login';
import SignUp from './components/signup';
import Footer from './components/footer';
import React from 'react';
import Header from './components/header';
import About from './components/about';
import Home from './components/home';

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topnavbar' element={<Topnavbar />} />
        <Route path='/about' element={<About /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/footer' element={<Footer />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
