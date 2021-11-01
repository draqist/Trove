import {useState} from 'react'
import { signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'


const [error, setError] = useState('')
const provider = new GoogleAuthProvider()
    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginemail, loginpassword)
            history.replace('/dashboard')
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }

    const handleGoogleSignIn = async () => {
        if (window.screen < 400) {
            try {
                await signInWithRedirect(auth, provider)
                history.replace('/dashboard')
            } catch(error) {
                setError(error.message)
            }
        } else {
            try {
                await signInWithPopup(auth, provider)
                history.replace('/dashboard')
            } catch (error) {
                setError(error.message)
            }
        }
    }