import React, {useState} from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import { auth } from '../../firebase'
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'
import './settings.scss'


const SettingsPage = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [response, setResponse] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [Oldpassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setDisplayName(user.displayName)
            setEmail(user.email)
            setPhoneNumber('')
            console.log(user)
        } 
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
            setResponse('Password Reset Link Sent')
        } catch (error){
            setError(error.message)
            console.log(error)
        }
    }
    return (
             <div className='settings_page'>
                 <Sidebar />
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
                            <input type='text' defaultValue={displayName} />  
                        </div>
                    </div>
                    <div className = 'form-field'>
                      <label> Email</label>
                         <div className='input-field'>
                            <input type='text' defaultValue={email} />  
                        </div>
                    </div>
                </div>
                <div className='profile_settings'>
                    <div className = 'form-field'>
                      <label> Phone Number </label>
                         <div className='input-field'>
                            <input type='text' defaultValue={phoneNumber} />  
                        </div>
                    </div>
                    <div className = 'form-field'>
                      <label> Date Of Birth </label>
                         <div className='input-field'>
                            <input type='text' defaultValue={email} />  
                        </div>
                    </div>
                </div>
                     <h1> Password Settings </h1>
                <div className='password_settings'>
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
