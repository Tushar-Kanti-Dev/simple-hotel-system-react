
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Footer/Footer';
import Rooms from './Pages/Rooms/Rooms';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Rooms' element={<Rooms></Rooms>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
