import React from "react"
import {Button} from "flowbite-react"
import {deleteDoc, doc} from "firebase/firestore"
import db from "../config/databaseConfig/firebaseConfig"
import {useNavigate} from "react-router-dom"
const UserItem = ({user}) => {
  const navigate = useNavigate()
  const handleDeleteUser = async (id) => {
   await deleteDoc(doc(db, "users", id))
   window.location.reload(false)
  }
  const handleViewUser = (id) => {
   navigate(`/user/detail/${id}`)
  }
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <td className="py-4 px-6 text-center border-r whitespace-nowrap">{user?.firstName}</td>
      <td className="py-4 px-6 text-center border-r whitespace-nowrap">{user?.lastName}</td>
      <td className="py-4 px-6 text-center border-r whitespace-nowrap">
        <a href={`mailto:${user?.email}`} style={{color:"#08f"}}>{user?.email}</a>
      </td>
      <td className="py-4 px-6 text-center border-r whitespace-nowrap">
        <a href={`tel:${user?.phoneNumber}`} style={{color:"violet"}}>{user?.phoneNumber}</a>
      </td>
      <td className="flex justify-center py-4">
        <div className="flex gap-2">
          <Button onClick={() => handleViewUser(user?.id)}>View</Button>
          <Button color="failure" onClick={() => handleDeleteUser(user?.id)}>
            Delete
          </Button>
        </div>
      </td>
    </tr>
  )
}
export default UserItem
