import { createContext } from 'react'

const MapContext = createContext({
  toggleMap: true,
  setToggleMap: () => {},
})

export default MapContext