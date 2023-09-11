import React from 'react'
import { LogoTran } from '../../assets/image'

export default function Footer() {
    return (

        <footer className="footer p-10 bg-gray-300 text-gray-700">
            <div>
                <img src={LogoTran} alt="logo" />
                <p className='px-6 font-bold '>will give you comfort you deserve</p>


            </div>
            <div>
                <span className="footer-title">Location</span>
                <a className='link link-hover font-semibold'>Chauri Deurali-7 , Madan</a>
                <a className='link link-hover font-semibold'>Kavrepalanchok , Nepal</a>
                
            </div>
            <div>
                <span className="footer-title">Contacts</span>
                
                <a className='link link-hover font-semibold'>Phone number : +977-9808441307</a>
                <a className='link link-hover font-semibold'>Phone number : +977-9851012725</a>
                
            </div>
            <div>
                <span className="footer-title">Email</span>
                <a className='link link-hover font-semibold'>info@pemahomestay.com.np</a>
                
            </div>
        </footer>

    )
}
