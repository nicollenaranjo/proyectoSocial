import React, {useEffect, useState} from 'react'
import { todosPj } from '../funciones/funciones'


const Inicio = () => {

  const [pjs, setPj] = useState(null)

  useEffect(() => {
    todosPj(setPj)
  }, [])

  return (
    <>
      {pjs != null ? (
        pjs.map(pj => (
          <div key={pj.id}>
            <a href=''> {pj.id} </a>
            <a href={`/pj/${pj.id}`}> {pj.name} </a>
            
          </div>
          ))
      ) : ('No hay personajes')}
    </>
  )
}

export default Inicio