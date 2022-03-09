import { googleAuthProvider } from "../firebase/firebase"
import { getAuth, signInWithPopup } from "firebase/auth"

export const startLogin = () => {
  const auth = getAuth()
  return () => {
    return signInWithPopup(auth, googleAuthProvider)
  }
}