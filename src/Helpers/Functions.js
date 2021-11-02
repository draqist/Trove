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



export const handleSignIn = async ({loginemail, loginpassword, setError}) => {
    try {
        await signInWithEmailAndPassword(auth, loginemail, loginpassword)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }

   export const handleGoogleSignIn = async ({setError}) => {
        if (window.screen < 400) {
            try {
                await signInWithRedirect(auth, provider)
            } catch(error) {
                setError(error.message)
            }
        } else {
            try {
                await signInWithPopup(auth, provider)
            } catch (error) {
                setError(error.message)
            }
        }
   }
export const handleSignUp = async ({setError, password, passwordconfirm, email}) => {
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
export const handleGoogleSignUp = async ({setResponse, setError}) => {
        try {
            await signInWithPopup(auth, googleProvider)
            setResponse('Verification email has been sent to your email')
        } catch (error) {
            setError(error.message)
        }
    }
    