import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Topnavbar from './components/hometopnavbar';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import Post from './components/post'
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Topnavbar' element={<Topnavbar />} />
        <Route path='post' element={<Post />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/footer' element={<Footer />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
