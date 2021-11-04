import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
} from 'firebase/auth'

const googleProvider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider()



export const handleSignIn = async (loginemail, loginpassword, redirect) => {
    try {
        let res = await signInWithEmailAndPassword(auth, loginemail, loginpassword)
        if (res) {
                    redirect()
                }
        } catch (error) {
            console.log(error.message)
        }
    }

   export const handleGoogleSignIn = async (setError, redirect) => {
        if (window.screen < 400) {
            try {
               let res = await signInWithRedirect(auth, provider)
                console.log(res)
                if (res) {
                    redirect()
                }
            } catch(error) {
                setError(error.message)
            }
        } else {
            try {
                let res = await signInWithPopup(auth, provider)
                console.log(res)
                  if (res) {
                    redirect()
                }
            } catch (error) {
                setError(error.message)
            }
        }
   }
export const handleSignUp = async (setError, password, passwordconfirm, email) => {
        try {

        if (password !== passwordconfirm) {
            return setError('Passwords do not match')
        }
        if (password.length <= 7) {
            return setError('Password is too short')
            }
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
}
export const handleGoogleSignUp = async (setResponse, setError) => {
        try {
            let res = await signInWithPopup(auth, googleProvider)
            console.log(res)
            setResponse('Verification email has been sent to your email')
        } catch (error) {
            setError(error.message)
        }
    }
    