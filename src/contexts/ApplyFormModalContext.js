import { createContext } from 'react'

const ApplyFormModalContext = createContext({
  toggleModal: true,
  setToggleModal: () => {},
})

export default ApplyFormModalContext