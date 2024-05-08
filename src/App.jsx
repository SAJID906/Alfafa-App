import React from 'react'
import Header from './Component/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import Home from './Component/Home'
import Course from './Component/Course'
import Signup from './Component/Signup'

function App() {
  return (
    <>
   <Router>
 
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/course" element={<Course/>}/>
  <Route path="/singup" element={<Signup/>}/>
  
 </Routes>
   </Router>
    </>
  )
}

export default App