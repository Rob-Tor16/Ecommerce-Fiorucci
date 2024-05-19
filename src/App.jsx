import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import ItemListContainer from "./components/itemListContainer.jsx"
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import PageNotFound from "./components/PageNotFound.jsx"

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
