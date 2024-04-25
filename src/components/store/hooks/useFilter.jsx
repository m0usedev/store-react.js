import PropTypes from 'prop-types';

import { useState, createContext, useContext  } from "react";

export function useFilter ( ) {
  /**
   * objeto : { rangoPrecio: {min:0,max:100}, categoria:['coche','tecnologia]}
   */
  const {filtro, setFiltro} = useContext(FilterContext)

  const modifyFilter = ( propiedad ) => {
    /**
     * propiedad = [ 'nombrePropiedad', 'nuevoValor' ]
     */
    if (Array.isArray(propiedad)) {
      if (propiedad.length == 2) {
        let newFiltro = { ...filtro }
        if(newFiltro[propiedad[0]] != undefined) {
          if( typeof newFiltro[propiedad[0]] == typeof propiedad[1])  {
            newFiltro[propiedad[0]] = propiedad[1]
            setFiltro(newFiltro)
          } else {
            return {
              type : false,
              mesaje   : 'El tipo de valor nuevo no coincide con el antiguio. Antiguo: '+typeof newFiltro[propiedad[0]]+' Nuevo: '+typeof propiedad[1]
            }
          }
        } else {
          return {
            type : false,
            mesaje   : 'La propiedad no existe'
          }
        }
        return {
          type : true,
          mesaje   : 'Actualizacion correcta'
        }
      }
      return {
        type : false,
        mesaje   : 'El array no tiene dos elementos, tiene '+propiedad.length
      }
    }
    return {
      type : false,
      mesaje   : 'No has pasado un array por los parametros de la funcion'
    }

  }

  return { filtro, setFiltro, modifyFilter }
}

export const FilterContext = createContext()

export function FilterProvider ({ children }) {
  const [filtro, setFiltro] = useState()

  return (
    <FilterContext.Provider value={{
      filtro, 
      setFiltro
    }}>
      {children}
    </FilterContext.Provider>
  )
}

FilterProvider.propTypes = {
  children: PropTypes.node,
};