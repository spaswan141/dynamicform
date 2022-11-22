import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Form from '../pages/Form'
import UserList from '../pages/UserList'



const MainRoute = () => {
  return (
    <div>
        
       <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/users" element={<UserList/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute