import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './pages/Home/Home';
import ToolDetails from './pages/Home/ToolDetails';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Login/Register';
import Payment from './pages/Payment/Payment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetReview from './pages/Review/GetReview';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<LoginPage></LoginPage>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/payment' element={<Payment></Payment>}></Route>
       <Route path='/getReview' element={<GetReview></GetReview>}></Route>
       <Route path='/home/:toolId' element={<ToolDetails></ToolDetails>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <ToastContainer />
     <Footer></Footer>
    </div>
  );
}

export default App;
