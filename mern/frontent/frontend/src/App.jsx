import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'

import Loginn from './pages/Loginn.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Loginn/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}
