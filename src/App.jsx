import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import ItemListContainer from "./components/itemListContainer.jsx"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import PageNotFound from "./components/PageNotFound.jsx"
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login.jsx"
import Register from "./components/Register.jsx"
import CheckOut from "./components/checkOut.jsx"

function App() {


  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <ToastContainer />
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
      
    </>
  )
}

export default App
