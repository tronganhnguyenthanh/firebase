import React from "react"
import useCustomHookList from "../customHooks/useCustomHookList"
import UserItem from "./UserItem"
const UserList = () => {
  const users = useCustomHookList()
  return (
   <div className="overflow-x-auto relative shadow-md sm:rounded-lg gap-2">
     <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="text-center border-r">Firstname</th>
            <th scope="col" className="text-center border-r">Lastname</th>
            <th scope="col" className="text-center border-r">Email</th>
            <th scope="col" className="text-center">Phone number</th>
            <th scope="col" className="text-center">Action</th>
          </tr>
       </thead>
       <tbody>
         {
           users?.length > 0 && users?.map((i) => {
             return(
               <UserItem key={i?.id} user={i}/>
             )
           })
         }
       </tbody>   
     </table>
    </div>
  )
}

export default UserList