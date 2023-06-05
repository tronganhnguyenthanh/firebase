import React, {useState} from "react"
import {Button, Label, TextInput} from "flowbite-react"
import {signInWithEmailAndPassword} from "firebase/auth"
import auth from "../config/authConfig/firebaseAuthConfig"
import {toast, ToastContainer} from "react-toastify"
import {Link, useNavigate} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState([])
  const navigate = useNavigate()
  const signIn = async () => {
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    if (email === "") {
      toast.error("Please enter your email", {position:"top-center"})
      return false
    }
    if (password === "") {
      toast.error("Please enter your password", {position:"top-center"})
      return false
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/user/list")
      } catch (error) {
        const errorMessage = error.message
        setError(errorMessage)
      }
      return true
    }
  }
  return (
    <>
      <ToastContainer />
      <form className="container mx-auto flex flex-col gap-4 py-48 p-3 mt-28 form-border">
        <p className="text-red-600">{error}</p>
        <div>
          <div className="mb-2 block">
            <Label 
              value="Email" 
              style={{color:"#fff"}}
            />
          </div>
          <TextInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label 
              value="Password" 
              style={{color:"#fff"}}
            />
          </div>
          <TextInput
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex">
          <Button onClick={signIn}>Sign in</Button>
          <Link
            className="mt-2 ml-1 underline text-white hover:text-blue-600 p-1"
            to="/forgot-password"
          >
            Forgot password ?
          </Link>
        </div>
      </form>
    </>
  )
}
export default Login
