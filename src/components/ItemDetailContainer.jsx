import React from 'react'
import { useState, useEffect } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebase/firebaseConfig';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
   
    useEffect(()=> {
        
      const docRef = doc(db, "Ropas", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id}
          );
        })
    }, [id])

  return (
    
      <div>
        {
            item && <ItemDetail item={item}/>
        }
        
    </div>
    
    
  )
}

export default ItemDetailContainer