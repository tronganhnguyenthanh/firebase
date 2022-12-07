import React from "react"
import {Routes, Route} from "react-router-dom"
import FormAddUser from "../components/FormAddUser"
import UserDetail from "../components/UserDetail"
import UserList from "../components/UserList"
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/" element={<FormAddUser/>}/>
       <Route path="/user/list" element={<UserList/>}/>
       <Route path="/user/detail/:id" element={<UserDetail/>}/>
     </Routes>
   </div>
  )
}
export default App
