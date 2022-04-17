import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/Pages/Header/Header';
import Footer from './components/Pages/Footer/Footer';
import Register from './components/Pages/Register/Register';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
