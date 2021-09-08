
import React from 'react';

import Logo from './Logo';
import MenuBtn from './buttons/MenuBtn';

import './Header.scss';

export default function Header({menuState, setMenuState}){
    return (
        <header className="header">
            
			<MenuBtn menuState={menuState} setMenuState={setMenuState}/>
            {/* <ul className="nav">
                <CustomLink to="/" label="main" activeOnlyWhenExact={true}/>
                <CustomLink to="/categories" label="store" activeOnlyWhenExact={true}/>
                <li className='li_nav'>workshop</li>
               <li className='li_nav' id="login">log in</li>
           </ul> */}
           
        </header>
    )
}