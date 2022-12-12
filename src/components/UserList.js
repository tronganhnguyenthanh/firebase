import React, {useState} from "react"
import {Button} from "flowbite-react"
import {useNavigate} from "react-router-dom"
import useCustomHookList from "../customHooks/useCustomHookList"
import UserItem from "./UserItem"
import auth from "../config/authConfig/firebaseAuthConfig"
const UserList = () => {
  const users = useCustomHookList()
  const [email, setEmail] = useState("")
  auth.onAuthStateChanged((user) => {
   if(user !== null){
    setEmail(user.email)
   }
  })
  const navigate = useNavigate()
  const goBack = () => {
   navigate(-1)
  }
  const logOut = () => {
   navigate("/user/login")
  }
  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg gap-2">
        <div className="flex justify-end p-2">
          <p className="p-2">{email}</p>
          <Button onClick={logOut}>Sign out</Button>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-1">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-center border-r">
                Firstname
              </th>
              <th scope="col" className="text-center border-r">
                Lastname
              </th>
              <th scope="col" className="text-center border-r">
                Email
              </th>
              <th scope="col" className="text-center">
                Phone number
              </th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.length > 0 && users?.map((i) => {
              return <UserItem user={i} key={i?.id}/>
             })
            }
          </tbody>
        </table>
      </div>
      <div className="flex justify-start p-2">
        <Button color="purple" className="mt-1" onClick={goBack}>Back to add user</Button>
      </div>
    </>
  )
}
export default UserList
