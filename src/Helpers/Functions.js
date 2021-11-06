import { auth, db} from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    sendEmailVerification,
    updateEmail
} from 'firebase/auth'
import {Portfolio} from '../portfolio'
import { addDoc, collection, doc, updateDoc } from '@firebase/firestore';

const googleProvider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider()



export const handleSignIn = async (loginemail, loginpassword, redirect) => {
    try {
        let res = await signInWithEmailAndPassword(auth, loginemail, loginpassword)
        if (res) {
            redirect()
            await sendEmailVerification(auth.currentUser)
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
export const handleSignUp = async (setError, password, passwordconfirm, email, redirect) => {
        try {

        if (password !== passwordconfirm) {
            return setError('Passwords do not match')
        }
        if (password.length <= 7) {
            return setError('Password is too short')
            }
            let res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                redirect()
                await sendEmailVerification(auth.currentUser)
                }
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
}
export const handleGoogleSignUp = async (setResponse, setError, redirect) => {
        try {
            let res = await signInWithPopup(auth, googleProvider)
            console.log(res)
            if (res) {
                    redirect()
                setResponse('Verification email has been sent to your email')
                await sendEmailVerification(auth.currentUser)
                }
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }
export const reduced = Portfolio.reduce((portfolioTotal, totalQt) => {
        return totalQt.equityValue + portfolioTotal
}, 0)
    
export const portfolioValue = Portfolio.reduce((portfolioTotal, totalQt) => {
            return totalQt.equityValue + portfolioTotal
    }, 0)
export const totalAsset = Portfolio.length
export const topAsset = Portfolio.length - 2


export const UserDataHandler = async (User, UserEmail, UserImage, ) => {
    try {
        const UserDoc = await addDoc(collection(db, "Users"), {
            DisplayName: `${User}`,
            Email: `${UserEmail}`,
            PhotoUrl: `${UserImage}`,
            PhoneNumber: ` `
        })
        // const Doc = await setDoc()
        
        console.log('User info has been collected:', UserDoc.id)
    } catch (error) {
        console.log(error.message)
    }
}
export const PhoneNumberHandler = async (UpdatedPhoneNumber) => {
    try {
        const Doc = doc(db, "Users")
        await updateDoc(Doc, {
            PhoneNumber: `${UpdatedPhoneNumber}`
        })
    } catch (error) {
        console.log(error.message)
    }
}
export const EmailUpdateHandler = async (user, email, setError,setResponse) => {
        try {
            await updateEmail(user, email )
            setResponse('Email has been updated') 
        } catch (error) {
            setError(error.message)
        }
    }