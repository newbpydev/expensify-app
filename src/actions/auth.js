import { googleAuthProvider } from "../firebase/firebase"
import { getAuth, signInWithPopup, signOut } from "firebase/auth"

export const startLogin = () => {
  const auth = getAuth()
  return () => {
    return signInWithPopup(auth, googleAuthProvider)
  }
}

export const startLogout = () => {
  const auth = getAuth()
  return () => {
    return signOut(auth)
  }
}