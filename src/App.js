import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import ToolDetails from './pages/Home/ToolDetails';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/home/:toolId' element={<ToolDetails></ToolDetails>}></Route>
     </Routes>
     
     
    </div>
  );
}

export default App;
