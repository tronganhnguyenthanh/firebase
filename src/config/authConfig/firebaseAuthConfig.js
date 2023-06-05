import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey:"AIzaSyD2LKN17kpEgJfTvVLXCdEg3m-6yaSmnoo",
  authDomain:"crud-5c5c9.firebaseapp.com",
  projectId:"crud-5c5c9",
  storageBucket:"crud-5c5c9.appspot.com",
  messagingSenderId:"341779792638",
  appId:"1:341779792638:web:9055e8c09a83ae5b869baf"
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
