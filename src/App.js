
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Rooms from './Pages/Rooms/Rooms';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';



function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Rooms' element={
          <RequiredAuth>
            <Rooms/>
          </RequiredAuth>
        }/>
        <Route path='/contact' element={<Contact></Contact>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/login' element= {<Login></Login>}/>
        <Route path='/register' element= {<Register></Register>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
