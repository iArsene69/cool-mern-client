import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Read from './Components/Read/Read.tsx'
import Create from './Components/Create/Create.tsx'
import Update from './Components/Update/Update.tsx'
import Navbar from './Components/Navbar/Navbar.tsx'
import { ToggleContext } from './Hooks/ToggleHook.tsx'
import { App } from './App.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <Router>
      <ToggleContext>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/create' element={<Create />} />
        <Route path='/read/:id' element={<Update />} />
        <Route path='/ujang' element={<App />} />
      </Routes>
      </ToggleContext>
    </Router>
  </React.StrictMode>,
)
