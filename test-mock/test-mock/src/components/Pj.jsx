import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { unPj } from '../funciones/funciones'

const Pj = () => {
  const [pj, setPj] = useState(null)
  const params = useParams()
  useEffect(() => {
    unPj(params.id, setPj)
  }, [])

  return (
    <>
    {pj != null ? (
      <div>
      <h2>Id pj: {params.id}</h2>
      <p>Nombre: {pj.name} </p>
      <img src={pj.avatar} alt=''/>
      </div>
      ) : ('No hay personaje')}
    </>
  )
}

export default Pj