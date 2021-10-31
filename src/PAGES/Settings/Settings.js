import React, {useState} from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import { auth } from '../../firebase'
import { onAuthStateChanged, sendPasswordResetEmail, updatePassword, updateEmail, updateProfile} from 'firebase/auth'
import './settings.scss'
import update from '../../bg-images/update_black_24dp.svg'


const SettingsPage = () => {
    let [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [response, setResponse] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [Oldpassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const user = auth.currentUser
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setDisplayName(user.displayName)
            console.log(user)
        } 
        setPhoneNumber('')
    })
    const handleOldPassword = (e) => {
        setOldPassword(e.target.value)
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const NewpasswordSetter = async () => {
        try {
            await sendPasswordResetEmail(auth, email)
            await updatePassword(auth, newPassword)
            setResponse('Password Reset Link Sent, Kindly check your email')
        } catch (error){
            setError(error.message)
            console.log(error)
        }
    }
    const PhoneSetter = (e) => {
        setPhoneNumber(e.target.value)
    }
    const EmailInputSetter = async (e) => {
        setEmail(e.target.value)
        try {
            await updateEmail(user, email)
        } catch (error) {
            console.log(error)
        }
    }
    const NameHandler = (e) => {
        setDisplayName(e.target.value)
    }
    const EmailUpdateHandler = () => {
            setResponse('Email has been updated')
    }
    const ProfileHandler = async () => {
        try {
            await updateProfile(auth, {
                displayName: setDisplayName(displayName),

            })
        } catch (error) {
            setError(error.message)
        }
    }
    return (
             <div className='settings_page'>
                <div className = 'sidebar_desk'>
                    <Sidebar/>
                </div>
                     
            <div className='settings_content'>
                     {error && (
                         <div className='error1' >
                             {error}
                         </div>
                     )}
                     <h1> Account Overview</h1>
                {response && (
                    <div className='success' >
                        {response}
                    </div>
                )}
                <div className='profile_settings'>
                    <div className = 'form-field'>
                      <label> Display Name</label>
                         <div className='input-field'>
                            <input type='text' value = {displayName} onChange = {NameHandler} />  
                        </div>
                    </div>
                    <div className = 'form-field'>
                      <label> Email</label>
                         <div className='input-field'>
                            <input type='text' value ={email} onChange={EmailInputSetter} />
                            <img src={update} alt='' onClick={ EmailUpdateHandler }/>
                        </div>
                    </div>
                </div>
                <div className='profile_settings'>
                    <div className = 'form-field'>
                      <label> Phone Number </label>
                         <div className='input-field'>
                            <input type='tel' value = {phoneNumber} onChange = {PhoneSetter} placeholder = '+234 80 111 11 111' />  
                        </div>
                    </div>
                    <div className = 'form-field'>
                      <label> Date Of Birth </label>
                         <div className='input-field'>
                            <input type='date'  />  
                        </div>
                    </div>
                </div>
                <div className = 'password_settings'>
                    <button className = 'password-update' onClick= {ProfileHandler}>
                        Update profile
                    </button>
                </div>
                     <h1> Password Settings </h1>
                <div className='password_settings'>
                    <div>
                        <div className = 'form-field'>
                            <label> Old Password</label>
                                <div className='input-field'>
                                    <input type='password' value={Oldpassword} onChange = {handleOldPassword} />  
                                </div>
                            </div>
                            <div className = 'form-field'>
                            <label> New Password</label>
                                <div className='input-field'>
                                    <input type='password' value={newPassword} onChange = {handleNewPassword} />  
                                </div>
                            </div>
                            <div className = 'form-field'>
                            <label> Confirm New Password</label>
                                <div className='input-field'>
                                    <input type='password' value={confirmPassword} onChange={ handleConfirmPassword }/>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='password_settings'>
                     <button className = 'password-update' onClick= {NewpasswordSetter}>
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage
