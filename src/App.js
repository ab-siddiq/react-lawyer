import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/Pages/Header/Header';
import Footer from './components/Pages/Footer/Footer';
import Register from './components/Pages/Register/Register';
import ResetPassword from './components/Pages/Login/ResetPassword/ResetPassword';
import Profile from './components/Pages/Profile/Profile';
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
import GetService from './components/Pages/Services/GetService/GetService';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/getService/:serviceId' element={
          <RequireAuth>
            <GetService></GetService>
          </RequireAuth>
        }></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
