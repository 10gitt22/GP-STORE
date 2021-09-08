import React from 'react';
import './MenuBtn.scss';

export default function MenuBtn({menuState, setMenuState}){ 
    return (
        <div onClick={() => setMenuState(!menuState)} className="menu_btn">
            <div className="menu_icon">
                <input className="menu-icon__cheeckbox" type="checkbox" readOnly checked={menuState}/>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <div className="menu_text">menu</div> */}
        </div>
    )    
}