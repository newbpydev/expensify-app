import { googleAuthProvider } from "../firebase/firebase"
import { getAuth, signInWithPopup, signOut } from "firebase/auth"

//* Login
export const login = (uid) => ({
  type: "LOGIN",
  uid
})

export const startLogin = () => {
  const auth = getAuth()
  return () => {
    return signInWithPopup(auth, googleAuthProvider)
  }
}

//* logout process
export const logout = () => ({
  type: "LOGOUT"
})

export const startLogout = () => {
  const auth = getAuth()
  return () => {
    return signOut(auth)
  }
}