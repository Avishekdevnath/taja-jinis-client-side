import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Login from './component/AccessingProcess/Login';
import SignUp from './component/AccessingProcess/SignUp';
import AddProduct from './component/Admin/AddProduct';
import Admin from './component/Admin/Admin';
import AllOrder from './component/Admin/AllOrder';
import AllPayment from './component/Admin/AllPayment';
import AllReview from './component/Admin/AllReview';
import AllUsers from './component/Admin/AllUsers';
import DeleteProduct from './component/Admin/DeleteProduct';
import Contract from './component/Contract/Contract';
import Dashboard from './component/Dashboard/Dashboard';
import MyOrder from './component/Dashboard/MyOrder';
import MyProfile from './component/Dashboard/MyProfile';
import Payment from './component/Dashboard/Payment';
import Review from './component/Dashboard/Review';
import Category from './component/Home/Category/Category';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Shared/Footer';
import Navbar from './component/Shared/Navbar';


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/category' element={<Category></Category>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment' element={<Payment></Payment>} ></Route>
          <Route path='review' element={<Review></Review>}></Route>
        </Route>


        <Route path='/admin' element={<Admin></Admin>}>
          <Route path='allUsers' element={<AllUsers></AllUsers>}></Route>
          <Route path='allOrder' element={<AllOrder></AllOrder>}></Route>
          <Route path='allPayment' element={<AllPayment></AllPayment>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='deleteProduct' element={<DeleteProduct></DeleteProduct>} ></Route>
          <Route path='allReview' element={<AllReview></AllReview>}></Route>
        </Route>


      </Routes>
      <Footer></Footer>
    </div>
  )
}
export default App;


