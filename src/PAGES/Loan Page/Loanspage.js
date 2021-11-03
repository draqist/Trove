import React from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import './loans.scss'


const loanBalance = 10000
const Loanspage = () => {
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
                            <h4> Loan Balance: { loanBalance }</h4>
                        </div>
                        <div className='active-loans'>
                            <h4> Active Loans </h4>
                    </div>
                    <div className='due-dates'>
                        <h4> Due dates</h4>
                    </div>
                </main>
                </div>
                
            </div>
        </div>
    )
}

export default Loanspage
