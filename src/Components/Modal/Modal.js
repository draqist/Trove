import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import './modal.scss'
import SimpleListMenu from '../Dropdown/Dropdown';
import { PaystackButton } from "react-paystack"
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../../firebase';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import {portfolioValue} from '../../Helpers/Functions'


export default function Modal({ open, setOpen }) {
    const [amount, setAmount] = useState('')
    const [title, setTitle] = useState('')
    const [email, setEmail] = useState('')
    const [response, setResponse] = useState('')
    const publicKey = 'pk_test_ac8bf65b31aed3b90225f7c19032b1fab4d6bb42'

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
        if (user) {
            setEmail(user.email)
        }
    })
    }, [])

    const paymentConfigs = {
    email,
    amount,
    publicKey,
    text: "Take loan",
    onSuccess: () => {
      setEmail("")
    },
        onClose: () => {
        console.log('done')
    },
  }
    return (
        <div >
            <Dialog open={open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className = 'modal-box'>
                <DialogContent>
                    <div className='loan_form'>
                        <div className='close'>
                            <span></span>
                            <CloseSharpIcon onClick={ () => setOpen(!open)}/>
                        </div>
                        {
                            response && (
                                <div className='error1' >{response}</div>
                            )
                        }
                        <h3> Loan Form </h3>
                        <p className="signup_form-input-label">Loan Title</p>
                        <div className="signin_input">
                            <div className="form-input-1">
                                <input data-test="input" type="tel" className="input_field" id="email" placeholder="Loan Title" value={title} required onChange={ (e) => setTitle(e.target.value) }/>
                            </div>
                        </div>
                        <p className="signup_form-input-label">Loan Amount</p>
                        <div className="signin_input">
                            <div className="form-input-1">
                                <input data-test="input" type="tel" className="input_field" id="cmail" placeholder="Amount in Kobo" value={amount} required onChange={ (e) => setAmount(e.target.value) }/>
                            </div>
                        </div>
                        <div className="form-input-2">
                            <p className="signup_form-input-label">Payback Duration </p>
                            <div className="signin_input">
                                <div className="form-input-1">
                                    <SimpleListMenu />
                                </div>
                            </div>
                        </div>
                        <p className="signup_form-input-label">Email </p>
                        <div className="signin_input">
                            <div className="form-input-1">
                                <input data-test="input" type="tel" className="input_field" id="dmail" placeholder="" defaultValue = {email} />
                            </div>
                        </div>
                        <div className="form-input-2">
                            <p className="signup_form-input-label-1">Password Confirmation</p>
                            <div className="signin_input">
                                <div className="form-input-1">
                                    <input data-test="input" type="password" className="input_field" id="password-confirm" placeholder="Confirm Password" required />
                                </div>
                            </div>
                            <Button variant='contained' style={{ backgroundColor: '#5AD882' }} onClick={async () => {
                                if (amount > (portfolioValue) * .6) {
                                    try {
                                        setResponse('You cannot borrow beyond 60% of your porfilio')
                                    } catch (error) {
                                        setResponse('error')
                                    }
                                }
                            }}>
                                <PaystackButton  {...paymentConfigs}/>
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}