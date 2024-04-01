import React, { createContext, useState, useContext } from 'react'

const MapContext = createContext()

export const MapProvider = ({ children }) => {
  const [isMapVisible, setIsMapVisible] = useState(false)

  const toggleMapVisibility = () => {
    setIsMapVisible(prevState => !prevState)
  }

  return (
    <MapContext.Provider value={{ isMapVisible, toggleMapVisibility }}>
      {children}
    </MapContext.Provider>
  )
}

export const useMap = () => useContext(MapContext)