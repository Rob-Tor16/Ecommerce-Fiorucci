import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import ItemListContainer from "./components/itemListContainer"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/productos" element={<itemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
