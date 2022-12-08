import React, {useState} from "react"
import {Button, Label, TextInput} from "flowbite-react"
import {createUserWithEmailAndPassword} from "firebase/auth"
import auth from "../config/authConfig/firebaseAuthConfig"
import {toast, ToastContainer} from "react-toastify"
import {useNavigate} from "react-router-dom"
const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])
  const navigate = useNavigate()
  const signUp = async () => {
    if(email === ""){
     toast.error("Please enter your email", {position:"top-center"})
     return false
    }
    if (password === "") {
      toast.error("Please enter your password", {position:"top-center"})
      return false
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        navigate("/user/login")
      } catch (error) {
         const errorMessage = error.message
         setError(errorMessage)
      }
      return true
    }
  }
  return (
    <>
      <ToastContainer/>
      <form className="container mx-auto flex flex-col gap-4 py-48 p-3">
        <p className="text-red-600">{error}</p>
        <div>
          <div className="mb-2 block">
            <Label value="Email" />
          </div>
          <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Password" />
          </div>
          <TextInput
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={signUp}>Sign up</Button>
        </div>
      </form>
    </>
  )
}
export default Register
