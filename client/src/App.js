import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Topnavbar from './components/topnavbar';
import Login from './components/login';
import SignUp from './components/signup';
import React from 'react';
import About from './components/about';
import Home from './components/home';
import Homepage from './components/user/homepage';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topnavbar' element={<Topnavbar />} />
        <Route path='/about' element={<About /> } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/homepage' element={<Homepage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
