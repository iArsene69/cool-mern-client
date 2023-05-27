import { useContext } from "react"
import { ContextNama } from "./App"
export default function Nama() {
    const nama = useContext(ContextNama)

  return (
    <div className="text-xl text-black">{nama}</div>
  )
}
