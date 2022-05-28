import { Route,  Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Login from './component/AccessingProcess/Login';
import SignUp from './component/AccessingProcess/SignUp';
import Contract from './component/Contract/Contract';
import Category from './component/Home/Category/Category';
import Home from './component/Home/Home';
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
        
      </Routes>
   <Footer></Footer>
    </div>  
)
}
export default App;


