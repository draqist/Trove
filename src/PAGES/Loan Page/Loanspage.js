import Table  from '../../Components/Table/Table'
import React, {useState} from 'react'
import Sidebar from '../../Components/SIdeBar/Sidebar'
import './loans.scss'
import Modal from '../../Components/Modal/Modal';
import { userQuery } from '../../Helpers/Functions';

const Loanspage = () => {
    const [open, setOpen] = useState(false)
    const [nav, setNav] = useState(false)
    userQuery()
    return (
        <div className = 'loans_page'>
            <div className='sidebar_desk'>
                <Sidebar/>
            </div>
            <div className='loan_content'>
                
                {nav &&
                        <div className = 'm_nav'>
                            <div className = 'wnl'>
                        <Sidebar nav = {nav} setNav = {setNav} />
                            </div>
                        </div>
                }
                <div className='loan_headers'>
                    <div className = 'btn-small'>
                            <button className="toggle-button" onClick = {()=> setNav(!nav)}>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                                <div className="toggle-button__line"></div>
                            </button>
                        </div>
                    <div className = 'balances'>
                        <div className='loan-title' >
                            <h2> All Loans </h2>
                            <button onClick = {() => setOpen(!open)} >
                                Take a loan
                            </button>
                        </div>
                        <main>
                            <div className='loan-balance'>
                                <h4> Loan Balance</h4>
                                <div className = 'loan-values'>
                                    <h2>  0  </h2>
                                </div>
                            </div>
                            <div className='active-loans'>
                                <h4> Active Loans </h4>
                                <div className = 'loan-values'>
                                    <h2>  0  </h2>
                                </div>
                            </div>
                            <div className='due-dates'>
                                <h4> Due Date(s)</h4>
                                <div className = 'loan-values'>
                                    <h2>  0  </h2>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div className = 'balances'>
                        <h2> Loan Balance</h2>
                        <div className='table_body'>
                            <div className='table-head'>
                                <h4> s/n </h4>
                                <h4> loan title</h4>
                                <h4> Interest-per-month</h4>
                                <h4> Amount taken </h4>
                                <h4>  Balance </h4>
                            </div>
                                <Table key={null} eQv={'-'} Qt={'-'} pps = {'-'} id={1} symbol={'-'}/>
                        </div>
                   </div>
                    {
                        open && <Modal open={open} setOpen={setOpen}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Loanspage
