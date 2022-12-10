import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Topnavbar from './components/topnavbar';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signup';
import Post from './components/post'

function App() {
  return (
    <BrowserRouter>
    <Topnavbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='post' element={<Post />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/post' element={<Post/>} />
        <Route path='/signup' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
