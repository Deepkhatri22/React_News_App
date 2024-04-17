
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router , Routes  ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import FetchData from './component/FetchData';
import Footer from './component/Footer';
function App() {
  return (
    <>
    <Router>
    <Navbar/>

      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/general' element={<FetchData cat="general"/>}/>
        <Route  path='/bussiness' element={<FetchData cat="business"/>}/>
        <Route path='/Entertainment' element={<FetchData cat="Entertainment"/>}/>
        <Route  path='/science' element={<FetchData cat="science"/>}/>
        <Route  path='/sports' element={<FetchData cat="sports"/>}/>
        <Route  path='/Technology' element={<FetchData cat="Technology"/>}/>
       
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
