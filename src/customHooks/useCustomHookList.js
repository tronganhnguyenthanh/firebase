import {useEffect, useState} from "react"
import {collection, getDocs} from "firebase/firestore"
import db from "../config/databaseConfig/firebaseConfig"
const useCustomHookList = () => {
  const [data, setData] = useState([])
  useEffect(() => {
   getUsers()
  },[])
  const getUsers = async () => {
   const querySnapshot = await getDocs(collection(db, "users"))
   const querySnapshotList = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
   setData(querySnapshotList)
  }
  return [...data]
}

export default useCustomHookList