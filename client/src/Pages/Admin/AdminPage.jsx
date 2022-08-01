import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminPanel from './AdminPanel'
import RecordList from './RecordListPage'
import BookingSlotsPage from './BookingSlotsPage'
function AdminPage() {
  return (
    <>
    

    <Routes>

      <Route exact path="/adminpanel" element={<AdminPanel/>} />
      <Route exact path="/recordlist" element={<RecordList/>} />
      <Route exact path="/bookingslots" element={<BookingSlotsPage/>} />
      


      </Routes>
    
    </>
  )
}

export default AdminPage