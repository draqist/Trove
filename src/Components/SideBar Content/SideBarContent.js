import React, {useState} from 'react'
import './sidebarcontent.scss'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import StockCard from '../StockCard/StockCard'

const portValue = '10,000'

const SideBarContent = () => {
    const [userName, setUserName] = useState('')
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (user.displayName === null) {
                setUserName('Stranger')
            }else
            setUserName(user.displayName)
            console.log(user)
        }
    })
    return (
        <>
            <section className='dashboard_content'>
                <div style = {{borderBottom: '2px solid rgba(0,0,0,.25)', marginBottom: '2rem', borderRadius: '8px'}}>
                    <div className='Header_section'>
                        <div className='Header_title '>
                                <h3> Hello { userName }</h3>
                                <span> Happy trading!!</span>
                            </div>
                            <div className='Header_portfolio shadow-4dp'>
                                <h4> Total Portfolio Value : { portValue }</h4>
                                <h4> Wallet Balance : { portValue }</h4>
                                <h4>  Loan Balance : { portValue }</h4>
                            </div>
                        </div>
                    </div>
                <div className='trending_stocks'>
                    <h2> Trending</h2>
                    <div className='t_stocks'>
                        <StockCard/>
                    </div>
                </div>
                <div className='top_gainers'>

                </div>
                <div className='text_dummy'>

                </div>
            </section>
         <section></section>   
         <section></section>   
         <section></section>   
         <section></section>   
         <section></section>   
         <section></section>   
        </>
    )
}

export default SideBarContent
