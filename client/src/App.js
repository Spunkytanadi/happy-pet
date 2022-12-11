import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Topnavbar from './components/topnavbar';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import Post from './components/post'
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Topnavbar />} />
        <Route path='home' element={<Home />} />
        <Route path='post' element={<Post />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post' element={<Post />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/footer' element={<Footer />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
