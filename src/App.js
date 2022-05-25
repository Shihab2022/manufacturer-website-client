import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './pages/Home/Home';
import ToolDetails from './pages/Home/ToolDetails';
import LoginPage from './pages/Login/LoginPage';
import Register from './pages/Login/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetReview from './pages/Review/GetReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import RequireAuth from './components/RequareAuth';
import AllOrders from './pages/Dashboard/AllOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts';
import Blog from './Blog/Blog';
import Payment from './pages/Dashboard/Payment';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<LoginPage></LoginPage>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/blog' element={<Blog></Blog>}></Route>
       <Route path='dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
              <Route path='myProfile' element={<MyProfile/>}></Route>
              <Route path='myOrders' element={<MyOrders/>}></Route>
              <Route path='addReview' element={<AddReview/>}></Route>
              <Route path='allOrders' element={<AllOrders/>}></Route>
              <Route path='addProduct' element={<AddProduct/>}></Route>
              <Route path='makeAdmin' element={<MakeAdmin/>}></Route>
              <Route path='payment/:orderId' element={<Payment/>}></Route>
              <Route path='manageProducts' element={<ManageProducts/>}></Route>

       </Route>
       <Route path='/getReview' element={<GetReview></GetReview>}></Route>
       <Route path='/home/:toolId' element={<RequireAuth><ToolDetails/></RequireAuth>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <ToastContainer />
     <Footer></Footer>
    </div>
  );
}

export default App;
