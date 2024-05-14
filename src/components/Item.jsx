
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (

    <div className="container-productos col-md-3  pt-5 pb-2  p-3 mb-4 rounded">
            <div className="col">
                <div className="card text-center bg-white" >
                    <div  className="card-body justify-content-center">
                    <img className="img" src={producto.imagen}/>
                      <p>{producto.titulo}</p>
                      <div>${producto.precio}</div>
                      <div className="div-boton">
                          <Link type="button" className="button" to={`/item/${producto.id}`} >Ver Detalles</Link>
                      </div>
                    </div>
                </div>
            </div>
    </div>

  )
}

export default Item