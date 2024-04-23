import PropTypes from 'prop-types';

import { useState, createContext } from "react"

export function useVisibility () {
  const [visibility, setVisibility] = useState(false)
  return {visibility, setVisibility}
}

export const VisibilityContext = createContext()
import './visibility.css'

export function VisibilityProvider ({ children }) {
  const {visibility, setVisibility} = useVisibility()
  return (
    <VisibilityContext.Provider value={{
        visibility, 
        setVisibility
      }}>
        <div className='VisibilityProvider'>
          {children}
        </div>
    </VisibilityContext.Provider>
  )
}

VisibilityProvider.propTypes = {
  children: PropTypes.node
};