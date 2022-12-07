import React, {useState} from "react"
import {Button, Label, TextInput} from "flowbite-react"
import {collection, addDoc} from "firebase/firestore"
import db from "../firebase/firebaseConfig"
import {useNavigate} from "react-router-dom"
import {ToastContainer, toast} from "react-toastify"
const FormAddUser = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const navigate = useNavigate()
  const handleAdd = async () => {
    if(firstName === ""){
     toast.error("Please enter your firstname", {position:"top-center"})
     return false
    }
    if(lastName === ""){
     toast.error("Please enter your lastname", {position:"top-center"})
     return false
    }
    if(email === ""){
     toast.error("Please enter your email", {position:"top-center"})
     return false
    }
    if(phoneNumber === ""){
     toast.error("Please enter your phone number", {position:"top-center"})
     return false
    }else{
      await addDoc(collection(db, "users"), {
        firstName:firstName,
        lastName:lastName,
        email:email,
        phoneNumber:phoneNumber
      })
      navigate("/user/list")
    }
  }
  return (
   <form className="container mx-auto flex flex-col gap-4 py-48 p-3">
     <ToastContainer/>
     <div>
       <div className="mb-2 block">
         <Label value="Firstname"/>
       </div>
       <TextInput
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
       />
     </div>
     <div>
       <div className="mb-2 block">
         <Label value="Lastname"/>
       </div>
       <TextInput
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
       />
     </div>
     <div>
       <div className="mb-2 block">
         <Label value="Email"/>
       </div>
       <TextInput
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
     </div>
     <div>
       <div className="mb-2 block">
         <Label value="Phone number"/>
       </div>
       <TextInput
         value={phoneNumber}
         onChange={(e) => setPhoneNumber(e.target.value)}
       />
     </div>
     <div>
       <Button onClick={handleAdd}>Add</Button>
     </div>
   </form>
  )
}

export default FormAddUser