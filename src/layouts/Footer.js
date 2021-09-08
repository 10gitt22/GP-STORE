import React from 'react';
import './Footer.scss';
import Logo from './Logo';

export default function Footer(){
    return(
        <footer>
            {/* <div className='footer-left'> */}
            <Logo />
            {/* </div> */}
            <div className='footer-right'>
                <div className='footer-block'>
                    <h3>Contact us</h3>
                    <ul>
                        <li>guitarparadise@gmail.com</li>
                        <li>+38-(067)-983-71-94</li>
                        <li>+38-(050)-846-34-00</li>
                    </ul>
                </div>
                <div className='footer-block'>
                    <h3>Address</h3>
                    <ul>
                        <li>Ukraine, Lviv</li>
                        <li>4V M.Lukasha</li>
                    </ul>
                </div>
                <div className='footer-block'>
                    <h3>Open hours</h3>
                    <ul>
                        <li>Mon: 9:00-20:00</li>
                        <li>Tue: 9:00-20:00</li>
                        <li>Wed: 9:00-20:00</li>
                        <li>Thu: 9:00-20:00</li>
                        <li>Fri: 9:00-20:00</li>
                        <li>Sat: 9:00-20:00</li>
                        <li>Sun: 9:00-20:00</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}