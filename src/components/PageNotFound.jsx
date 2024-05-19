import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200">404</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Oh-oh!</p>

    <p className="mt-4 text-gray-500">Pagina no encontrada.</p>

    <Link
      to="/"
      className="btn btn-primary"
    >
      Regresa al Inicio
    </Link>
  </div>
</div>
  )
}

export default PageNotFound