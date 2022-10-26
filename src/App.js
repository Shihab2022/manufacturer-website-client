import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';


import Footer from './components/Footer';
import Navbar from './components/Navbar';


// import NotFound from './components/NotFound';
// import Home from './pages/Home/Home';
// import ToolDetails from './pages/Home/ToolDetails';
// import LoginPage from './pages/Login/LoginPage';
// import Register from './pages/Login/Register';

// import GetReview from './pages/Review/GetReview';
// import Dashboard from './pages/Dashboard/Dashboard';
// import MyProfile from './pages/Dashboard/MyProfile';
// import MyOrders from './pages/Dashboard/MyOrders';
// import AddReview from './pages/Dashboard/AddReview';
// import RequireAuth from './components/RequareAuth';
// import AllOrders from './pages/Dashboard/AllOrders';
// import AddProduct from './pages/Dashboard/AddProduct';
// import MakeAdmin from './pages/Dashboard/MakeAdmin';
// import ManageProducts from './pages/Dashboard/ManageProducts';
// import Blog from './Blog/Blog';
// import Payment from './pages/Dashboard/Payment';
// import Portfolio from './portfolio/Portfolio';
import AOS from 'aos';
// import Loading from './components/Loading';

const NotFound = React.lazy(() => import('./components/NotFound'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const ToolDetails = React.lazy(() => import('./pages/Home/ToolDetails'));
const LoginPage = React.lazy(() => import('./pages/Login/LoginPage'));
const  Register = React.lazy(() => import('./pages/Login/Register'));
const GetReview = React.lazy(() => import('./pages/Review/GetReview'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const MyProfile = React.lazy(() => import('./pages/Dashboard/MyProfile'));
const MyOrders = React.lazy(() => import('./pages/Dashboard/MyOrders'));
const AddReview = React.lazy(() => import('./pages/Dashboard/AddReview'));
const RequireAuth = React.lazy(() => import('./components/RequareAuth'));
const AllOrders = React.lazy(() => import('./pages/Dashboard/AddProduct'));
const AddProduct = React.lazy(() => import('./pages/Dashboard/AddReview'));
const MakeAdmin = React.lazy(() => import('./pages/Dashboard/MakeAdmin'));
const  ManageProducts = React.lazy(() => import('./pages/Dashboard/ManageProducts'));
const Blog = React.lazy(() => import('./Blog/Blog'));
const Payment = React.lazy(() => import('./pages/Dashboard/Payment'));
const Portfolio = React.lazy(() => import('./portfolio/Portfolio'));
const Loading = React.lazy(() => import('./components/Loading'));


function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1200,
      delay: 100,
    });
  },[])
  return (
    <div >
     <Navbar></Navbar>
     <React.Suspense  fallback={<Loading/>}>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/login' element={<LoginPage/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
       <Route path='/portfolio' element={<Portfolio/>}></Route>
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
       <Route path='/getReview' element={<GetReview/>}></Route>
       <Route path='/home/:toolId' element={<RequireAuth><ToolDetails/></RequireAuth>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     </React.Suspense>
     <ToastContainer />
     <Footer></Footer>
    </div>
  );
}

export default App;
