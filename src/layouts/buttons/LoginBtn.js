import { useAuth } from 'contexts/Auth.context';
import React from 'react';

import './LoginBtn.scss';

export default function LoginBtn({authModalState, setAuthModalState}) {

    const { currentUser } = useAuth();
    console.log(currentUser);

    const loginBtnAnim = {
        'in': {
            transform: 'rotateZ(-90deg) translateX(50%) translateY(-50%)'
        }, 
        'out': {
            transform: 'rotateZ(-90deg) translateX(50%) translateY(100%)'
        }
    }

    console.log(); 
    return(
        <div className="login_btn"
        onClick={() => setAuthModalState(true)}
        style = { authModalState || currentUser ? loginBtnAnim.out : loginBtnAnim.in}
        >
            <span> LogIn / SignIn </span>
        </div>
    )
}