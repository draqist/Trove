import React, {useState,useEffect} from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import { auth } from '../../firebase'
import { onAuthStateChanged} from 'firebase/auth'
import './settings.scss'
import update from '../../bg-images/update_black_24dp.svg'
import { EmailUpdateHandler, PhoneNumberHandler, NewpasswordSetter } from '../../Helpers/Functions'




const SettingsPage = () => {
    const [nav, setNav] = useState(false)
    let [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [response, setResponse] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [Oldpassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const user = auth.currentUser
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setDisplayName(user.displayName)
            setEmail(user.email)
        } 
    })
    }, [])
    const handleOldPassword = (e) => {
        setOldPassword(e.target.value)
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    
    const PhoneSetter = (e) => {
        setPhoneNumber(e.target.value)
    }
    const EmailInputSetter = (e) => {
        setEmail(e.target.value)
    }
    const NameHandler = (e) => {
        setDisplayName(e.target.value)
        console.log(displayName)
    }
    const ProfileHandler =  (phoneNumber) => {
            PhoneNumberHandler(phoneNumber)
    }
    return (
             <div className='settings_page'>
                <div className = 'sidebar_desk'>
                <Sidebar />
                </div>
                     
            <div className='settings_content'>
                
                {nav &&
                        <div className = 'm_nav'>
                    <div className='wnl'>
                        <Sidebar nav={nav} setNav={ setNav }/>
                            </div>
                        </div>
                }
                     {error && (
                         <div className='error1' >
                             {error}
                         </div>
                     )}
                    <div className = 'btn-small'>
                            <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                            </button>
                        </div>
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
                            <input type='text' value = {displayName} placeholder = {displayName} onChange = {NameHandler}  />  
                        </div>
                    </div>
                    <div className = 'form-field'>
                      <label> Email</label>
                         <div className='input-field'>
                            <input type='text'value = {email} onChange={EmailInputSetter} />
                            <img src={update} alt='' onClick={ () => EmailUpdateHandler(user, email, setError, setResponse) } />
                            
                        </div>
                    </div>
                </div>
                <div className='profile_settings'>
                    <div className = 'form-field'>
                      <label> Phone Number </label>
                         <div className='input-field'>
                            <input type='tel' value = {phoneNumber} onChange = {PhoneSetter} placeholder = '+234 11 111 11 111' />  
                        </div>
                    </div>
                    <div className = 'form-field'>
                      <label> Date Of Birth </label>
                         <div className='input-field'>
                            <input type='date' placeholder = '24/07/1990' />  
                        </div>
                    </div>
                </div>
                <div className = 'profile_settings'>
                    <button className = 'password-update' onClick= {()=> ProfileHandler(phoneNumber)}>
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
                     <button className = 'password-update' onClick= {() => NewpasswordSetter(email, setResponse, setError)}>
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage
