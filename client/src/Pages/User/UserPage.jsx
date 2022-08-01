import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from '../../Components/User/Login/Login'
import Register from '../../Components/User/Register/Register'
import HomePage from './HomePage'
import ApplyPage from './ApplyPage'
import SuccessPage from './SuccessPage'
import ViewStatusPage from './ViewStatusPage'

function UserPage() {
  return (
    <>
   
      <Routes>

      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/home" element={<HomePage/>} />
      <Route exact path="/apply" element={<ApplyPage/>} />
      <Route exact path="/success" element={<SuccessPage/>} />
      <Route exact path="/viewstatus" element={<ViewStatusPage/>} />


      </Routes>
    



    </>
  )
}

export default UserPage