import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey:"AIzaSyDigdBcgCx-8-drgtRom-0i3qzpHfh0eyY",
  authDomain:"crud-9687a.firebaseapp.com",
  projectId:"crud-9687a",
  storageBucket:"crud-9687a.appspot.com",
  messagingSenderId:"297879561380",
  appId:"1:297879561380:web:6bf702d0da75ad1a5ff231"
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
