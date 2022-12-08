import React, {useState} from "react"
import {Button, Label, TextInput} from "flowbite-react"
import {sendPasswordResetEmail} from "firebase/auth"
import auth from "../config/authConfig/firebaseAuthConfig"
import {toast, ToastContainer} from "react-toastify"
import {useNavigate} from "react-router-dom"
const ForgotPassword = () => {
  const [resetPassword, setResetPassword] = useState("")
  const navigate = useNavigate()
  const resetUserPassword = async () => {
    if (resetPassword === "") {
      toast.error("Please enter your reset password",{
        position:"top-center",
      })
      return false
    } else {
      await sendPasswordResetEmail(auth, resetPassword)
      navigate("/login/user")
      return true
    }
  }
  return (
    <>
      <ToastContainer/>
      <form className="container mx-auto flex flex-col gap-4 py-48 p-3">
        <div>
          <div className="mb-2 block">
            <Label value="Reset password" />
          </div>
          <TextInput
            value={resetPassword}
            onChange={(e) => setResetPassword(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={resetUserPassword}>Reset</Button>
        </div>
      </form>
    </>
  )
}
export default ForgotPassword
