import { useAuth } from 'contexts/Auth.context';
import React from 'react';
import './ExitBtn.scss'

export default function ExitBtn() {
    const { currentUser, logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
            console.log('exit!!!!!');
        } catch (error) {
            console.log(error);
        }
    }

    const exitBtnAnim = {
        'in': {
            transform: 'translateY(0)'
        }, 
        'out': {
            transform: 'translateY(200%)'
        }
    }

    return (
        <div id="exit_btn"
        style = { currentUser === null ? exitBtnAnim.out : exitBtnAnim.in}
        onClick={() => {
            handleLogout()
        }}>
            Exit    
        </div>
    )
}
