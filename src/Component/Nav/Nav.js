import React from 'react'
import './Nav.css' 
import { SlMenu } from "react-icons/sl";

export const Nav=() => {
    return(
        <div className='bg-clr'>
            <div className='container'>
                <div className='row'>
                    <div className='col-1 res-change-width-1'>
                        <h1 style={{fontSize:"30px"}}><span style={{color:"orange"}}>M</span>azin</h1>
                    </div>

                    <ul className='col-9 row talign res'>
                        <li className='col-1 list'>
                            <a href='#'>Home</a>
                        </li>
                        
                        <li className='col-1 list'>
                            <a href='#'>About</a>
                        </li>

                        <li className='col-1 list'>
                            <a href='#'>Services</a>
                        </li>

                        <li className='col-1 list'>
                            <a href='#'>Portfolio</a>
                        </li>

                        <li className='col-1 list'>
                            <a href='#'>Blog</a>
                        </li>

                        <li className='col-1 list'>
                            <a href='#'>Contact</a>
                        </li>
                    </ul>

                    <div className='col-2 row talign icon res-change-width-2'>
                        <p className='col-6'>Menu</p>
                        <div className='col-3 talign'>
                            <SlMenu/>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}