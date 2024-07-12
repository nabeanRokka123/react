
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import AboutUs from './pages/aboutUs/AboutUs';
import Navbar from './components/Navbar';
import Search from './pages/search/Search';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element ={<Homepage/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/search' element={<Search/>}/>

      </Routes>
     </Router>
  );
}

export default App;
