import { createContext, useState } from 'react'
import Nama from './Nama'

export const ContextNama = createContext("")

export function App() {
  const [nama, setNama] = useState("")
  return (
    <ContextNama.Provider value={nama}>
      <input type="text" onChange={(e)=>setNama(e.target.value)} />
      <Nama />
    </ContextNama.Provider>
  )
}
