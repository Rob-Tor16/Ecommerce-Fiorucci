import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (

    <div className=" col-md-3  pt-5 pb-2  p-3 mb-4 rounded">

            <div className="col">
            <div className="card">
              <img className="imagen-producto" src={producto.imagen}/>
              <div className="card-info">
                <p className="text-title">{producto.titulo} </p>
              </div>

              <div className="text-title">${producto.precio}</div>

              <Link type="button" className="btn btn-primary" to={`/item/${producto.id}`} >Ver Detalles</Link>

            </div>
              
                
            </div>
    </div>

  )
}

export default Item