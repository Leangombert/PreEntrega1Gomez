import useSearchAPI from '../../hooks/useSearchAPI'
import { useEffect, useState } from 'react'
import Itemlist from '../ItemList/ItemList'


function ItemListContainer() {
  const {results, searchProducts, loading} = useSearchAPI ();
  const [query, setQuery] = useState("");

  useEffect(()=>{
    console.log("despues del primer render")
    searchProducts("Racion de Perros")

  },[])

const handleSearch = (e) => {
  e.preventDefault();
  if(query) searchProducts(query)
}

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-12'>Buscador de Productos</h1>
        <form className='flex justify-center mb-8' onSubmit={handleSearch}>
          <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} placeholder='Buscar Productos' className='w-full max-w-md border-gray-300 rounded p-3 focus:outline-none focus:ring-2'/>
        <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-lg font-semibold'>Buscar</button>
        </form>
        {loading ? (<p>Cargando...</p>)
        :(
          <Itemlist products={results}/>
        )}
        {!loading && results.lenght === 0 && (
          <p>No se encontraron resultados para la busqueda</p>
        )}
      </div>

    </div>
  )
}

export default ItemListContainer