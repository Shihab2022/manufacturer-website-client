import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './pages/Home/Home';
import ToolDetails from './pages/Home/ToolDetails';
import LoginPage from './pages/Login/LoginPage';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<LoginPage></LoginPage>}></Route>
       <Route path='/home/:toolId' element={<ToolDetails></ToolDetails>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     
     <Footer></Footer>
    </div>
  );
}

export default App;
