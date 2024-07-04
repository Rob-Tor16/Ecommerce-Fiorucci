import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Carrito from "./components/Cart.jsx"
import ItemListContainer from "./components/itemListContainer.jsx"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import PageNotFound from "./components/PageNotFound.jsx"
import { CartProvider } from "./context/CartContext.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <ToastContainer>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </ToastContainer>
      
      </BrowserRouter>
    </CartProvider>
      
    </>
  )
}

export default App
