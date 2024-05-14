import { useEffect } from "react"
import { useState } from "react";
import ItemList from './itemList.jsx'
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const categoria = useParams().categoria;
  
    const [ titulo, setTitulo ] = useState("Ropas")
  
    useEffect(() => {
      
      const productosRef = collection(db, "Ropas");
  
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
  
      getDocs(q)
      .then((resp) => {
  
        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id}
          })
        )
      })
  
    }, [categoria]);

  return (
    <div><ItemList productos={productos} titulo={titulo}/></div>
  )
}

export default ItemListContainer