import React from "react"
import {Routes, Route} from "react-router-dom"
import ForgotPassword from "../auth/ForgotPassword"
import Login from "../auth/Login"
import Register from "../auth/Register"
import FormAddUser from "../components/FormAddUser"
import UserDetail from "../components/UserDetail"
import UserList from "../components/UserList"
import "../customCSS/form.css"
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/" element={<Register/>}/>
       <Route path="/user/login" element={<Login/>}/>
       <Route path="/forgot-password" element={<ForgotPassword/>}/>
       <Route path="/user/add" element={<FormAddUser/>}/>
       <Route path="/user/list" element={<UserList/>}/>
       <Route path="/user/detail/:id" element={<UserDetail/>}/>
     </Routes>
   </div>
  )
}
export default App
