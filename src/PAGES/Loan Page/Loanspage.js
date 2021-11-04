import React from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import { Portfolio } from '../../portfolio'
import './loans.scss'


const loanBalance = 10000
const Loanspage = () => {
    const reduced = Portfolio.reduce((portfolioTotal, totalQt) => {
        return totalQt.equityValue + portfolioTotal
    }, 0)
    console.log(reduced)
    return (
        <div className = 'loans_page'>
            <div className='sidebar_desk'>
                <Sidebar/>
            </div>
            <div className='loan_content'>
                <div className = 'loan_headers'>
                        <h2> All Loans </h2>
                    <main>
                        <div className='loan-balance'>
                            <h4> Loan Balance</h4>
                            <div>
                                <h2> {reduced}  </h2>
                            </div>
                        </div>
                        <div className='active-loans'>
                            <h4> Active Loans </h4>
                    </div>
                    <div className='due-dates'>
                        <h4> Due dates</h4>
                    </div>
                    </main>
                    <div className='loan_form'>
                        <h3> Fill this loan form </h3>
                        <p className="signup_form-input-label">Loan Amount</p>
                        <div className="signin_input">
                            <div className="form-input-1">
                                <input data-test="input" type="tel" className="input_field" id="email" placeholder="" />
                            </div>
                        </div>
                <div className="form-input-2">
                    <p className="signup_form-input-label">Payback Duration </p>
                    <div className="signin_input">
                        <div className="form-input-1">
                            <input data-test="input" type="password" className="input_field" id="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="form-input-2">
                    <p className="signup_form-input-label-1">Password Confirmation</p>
                    <div className="signin_input">
                        <div className="form-input-1">
                            <input data-test="input" type="password" className="input_field" id="password-confirm" placeholder="Confirm Password"  />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Loanspage
