import React from 'react'
import Home from './pages/Home'
import Button from './pages/Button'
import ProjectList from './pages/ProjectList'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
<Route path='/' element={<Home/>} />
     <Route path="/project/:slug" element={<ProjectList />} />

      </Routes>
    </div>
  )
}

export default App
