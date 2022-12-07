import React, {useEffect, useState} from "react"
import {Card} from "flowbite-react"
import {doc, getDoc} from "firebase/firestore"
import {useParams} from "react-router-dom"
import db from "../firebase/firebaseConfig"
const UserDetail = () => {
  const {id} = useParams()
  const [detail, setDetail] = useState({})
  useEffect(() => {
   getUserById(id)
  },[id])
  const getUserById = async (id) => {
   let user_id = await getDoc(doc(db, "users", id))
   setDetail(user_id.data())
  }
  return (
   <div className="container mx-auto p-2 py-56">
     <Card>
       <p className="text-center">Firstname: <b className="text-green-500">{detail?.firstName}</b></p>
       <p className="text-center">Lastname: <b className="text-green-500">{detail?.lastName}</b></p>
       <p className="text-center">Email: <b className="text-green-500">{detail?.email}</b></p>
       <p className="text-center">Phone number: <b className="text-green-500">{detail?.phoneNumber}</b></p>
     </Card>
   </div>
  )
}
export default UserDetail