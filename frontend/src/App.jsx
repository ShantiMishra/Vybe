import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './assets/pages/SignUp'
import SignIn from './assets/pages/SignIn'

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
  )
}

export default App
